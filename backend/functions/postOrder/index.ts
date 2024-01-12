import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import middy from '../../node_modules/@middy/core';
import Joi from 'joi';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';
import {randomUUID} from 'crypto' 
import { validateSchema, timeStamp, hourStamp } from '@zocom/services';
import { OrderType } from '@backend/types';

async function orderConstructor(requestBody){
  
  const userId = requestBody.userId || randomUUID();
  const orderId = timeStamp();
  const totalPrice = requestBody.orderItems.reduce((total, item) => total + item.price, 0);

  function generateFiveDigitRandom() {
    return Math.floor(10000 + Math.random() * 90000);
  }
  const orderNr = generateFiveDigitRandom();

  const order = {
    "PK": `Kitchen`,
    "SK": `Order#${orderId}`,
    "orderItems": requestBody.orderItems,
    "customerName": requestBody.customerName || "guest",
    "totalPrice": totalPrice,
    "orderPlaced": hourStamp(),
    "status": "active",
    "orderNr": orderNr,
    "userId": userId,
    "orderId": orderId
  }
  return order
}

async function postMenu(order: OrderType) {
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


export const handler = middy()
.use (validateSchema(OrderSchema))
.handler(handlerFunction)

