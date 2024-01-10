//design will be PK User#username
//then SK will be #Profile#username which holds all userinfo
//then each PK User#username will store the orders 
//like this in the SK, ORDER#XXXXXX then orderdata has 
//username orderid etc

import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import middy from '../../node_modules/@middy/core';
import Joi from 'joi';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

type OrderType = {
  PK: string,
  SK: string,
  orderName: string,
  customerName: string,
  price: number,
  orderNr: number,
  orderId: string,
  status: string,
  eta: string,
}

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

async function postMenu(order: OrderType) {
   try {
    const params = {
        TableName: "YumYumDB",
        Item: order
    }
    await db.put(params).promise();
    return sendResponse(200, { success: true } );
   } catch (error) {
    return sendResponse(500, { success: false, error: 'Internal server error' });
   }
}

const handlerFunction = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    try {
        console.log(event)
        const requestBody = JSON.parse(event.body);
        return postMenu(requestBody);
    } catch (error) {
        console.error('Error json parse', error);
        return sendResponse(400, { success: false, error: 'Bad request' });
    }
}

export const OrderSchema = Joi.object({
  PK: Joi.string().min(3).max(30).required(),
  SK: Joi.string().min(3).max(50).required(),
  orderName: Joi.string().min(3).max(20).required(),
  customerName: Joi.string().min(3).max(200).required(),
  price: Joi.number().min(3).max(1000).required(),
  orderNr: Joi.number().min(3).max(1000).required(),
  orderId: Joi.string().min(3).max(200).required(),
  status: Joi.string().min(3).max(200).required(),
  eta: Joi.string().min(3).max(200).required()
});

//fråga om hur sidan för ipad vy ska  uppdateras, webbsockets? realtime updates.
//30 sec uppdateringar? 

export const handler = middy()
.use (validateSchema(OrderSchema))
.handler(handlerFunction)