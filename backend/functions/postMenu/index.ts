import { sendResponse } from '../../responses/index';
import {db} from '../../services/index';
import middy from '../../node_modules/@middy/core';
import Joi from 'joi';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

//varje recept som egen item i DB
//typa up lambdaeventet, APIGatewayProxyEventV2 representerar httpapi 
//då vi använder http api så behövs ej json bodyparse.
//yml IamRoleStatements för smidigare role management något att kolla på senare
//env tablenames
//primary key sort key

//tomorrow rewrite schema using joi, use the code in discord. Fixa simpel get function
//behöver dela up i packages

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

async function postMenu(menu) {
   try {
    const params = {
        TableName: "menu_table",
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
  menuId: Joi.string().min(3).max(30).required(),
  category: Joi.string().min(3).max(20).required(),
  desc: Joi.string().min(3).max(200).optional(),
  ingredients: Joi.array().items(Joi.string()).optional(),
  price: Joi.number().min(3).max(1000).required(),
});


exports.handler = middy()
.use (validateSchema(menuSchema))
.handler(handlerFunction)