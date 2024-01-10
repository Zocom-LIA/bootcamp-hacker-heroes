import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import middy from '../../node_modules/@middy/core';
import Joi from 'joi';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

type MenuType = {
  PK: string | number,
  SK: string,
  name: string,
  desc: string,
  ingredients: string[],
  price: number
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

async function postMenu(menu: MenuType) {
   try {
    const params = {
        TableName: "YumYumDB",
        Item: menu
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

export const menuSchema = Joi.object({
  PK: Joi.string().min(3).max(30).required(),
  SK: Joi.string().min(3).max(50).required(),
  name: Joi.string().min(3).max(20).required(),
  desc: Joi.string().min(3).max(200).optional(),
  ingredients: Joi.array().items(Joi.string()).optional(),
  price: Joi.number().min(3).max(1000).required(),
});

//Format for now is menu#fullmenu for pk, 
//sk will be either wontons#food or dip#sauce

export const handler = middy()
.use (validateSchema(menuSchema))
.handler(handlerFunction)