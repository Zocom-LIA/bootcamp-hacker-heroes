import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import middy from '../../node_modules/@middy/core';
import Joi from 'joi';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import {randomUUID} from 'crypto' 

type OrderType = {
  PK: string,
  SK: string,
  orderItems: string[],
  customerName: string,
  totalPrice: number,
  orderNr: number,
  orderId: string,
  status: string,
  eta: string,
}

const currentDate = new Date();

const timeOffset = 1; // CET offset in hours, need to adjust for daylight savings
currentDate.setHours(currentDate.getHours() + timeOffset);

const hourstamp = `${currentDate.toISOString().slice(11, 19)}`;
const milliseconds = String(currentDate.getMilliseconds()).padStart(4, '0'); 

const timestamp = `${currentDate.toISOString().slice(0, 19)}:${milliseconds}`;


export function validateSchema(schema) {
  return {
    before: async (request) => {
      try {
        await schema.validateAsync(JSON.parse(request.event.body));
      } catch (error) {
        return sendResponse(400, {error: error});
      }
    },
  };
}

async function orderConstructor(requestBody){
  const userId = requestBody.userId || randomUUID();
  const orderId = timestamp;
  const totalPrice = 200; 
  // totalPrice is temporary
  function generateFiveDigitRandom() {
    return Math.floor(10000 + Math.random() * 90000);
  }
  const orderNr = generateFiveDigitRandom();


  console.log(requestBody)
  console.log(userId, orderId)

  const order = {
    "PK": `User#${userId}`,
    "SK": `Order#${orderId}`,
    "orderItems": requestBody.orderItems,
    "customerName": requestBody.customerName || "guest",
    "totalPrice": totalPrice,
    "orderPlaced": hourstamp,
    "status": "active",
    "orderNr": orderNr,
    "userId": userId,
    "orderId": orderId
  }
  console.log(order);
  return order
}

async function postMenu(order) {
   try {
    const params = {
        TableName: "YumYumDB",
        Item: order
    }
    await db.put(params).promise();
    return sendResponse(200, { success: true, order} );
   } catch (error) {
    return sendResponse(500, { success: false, error: 'Internal server error' });
   }
}

const handlerFunction = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    try {
        const requestBody = JSON.parse(event.body);
        const order = await orderConstructor(requestBody);
        console.log(order);
        return postMenu(order);
    } catch (error) {
        console.error('Error json parse', error);
        return sendResponse(400, { success: false, error: 'Bad request' });
    }
}

export const OrderSchema = Joi.object({
  orderItems: Joi.array().items(Joi.object({
    name: Joi.string().min(3).max(20).required(),
    desc: Joi.string().min(3).max(200).optional(),
    ingredients: Joi.array().items(Joi.string()).optional(),
    price: Joi.number().min(3).max(1000).required(),
  })).required(),
  customerName: Joi.string().min(3).max(200).optional(),
});

//can use a timestamp query that only checks the current date in getOrder.

export const handler = middy()
.use (validateSchema(OrderSchema))
.handler(handlerFunction)

//design will be PK User#username
//then SK will be #Profile#username which holds all userinfo
//then each PK User#username will store the orders 
//like this in the SK, ORDER#XXXXXX then orderdata has 
//username orderid etc