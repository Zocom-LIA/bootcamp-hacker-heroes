import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import Joi from 'joi';
import middy from '@middy/core';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';




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

async function updateOrder(orderId: string, userId : string) {
    try {

        const dbControl = await db.get({
            TableName: "YumYumDB",
            Key: {
                "PK": `User#${userId}`,
                "SK": `Order#${orderId}`
            }
        }).promise();
        if (!dbControl || !dbControl.Item) {
            return sendResponse(404, { success: false, error: 'Item not found' });
        }

        const params = {
            TableName: "YumYumDB",
            Key: {
                "PK": `User#${userId}`,
                "SK": `Order#${orderId}`
            },
            UpdateExpression: `SET #status = :updatedStatus`,
            ExpressionAttributeNames: {
                "#status": "status"
            },
            ExpressionAttributeValues: {
                ":updatedStatus": "completed"
            },
    }
    await db.update(params).promise();
    return sendResponse(200, { success: true } );
    } catch (error) {
    return sendResponse(500, { success: false, error: 'Internal server error' });
   }
}






const handlerFunction = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    try {
        const requestBody = JSON.parse(event.body);
        const { userId, orderId } = requestBody;
        return updateOrder(orderId, userId);
    } catch (error) {
        console.error('Error json parse', error);
        return sendResponse(400, { success: false, error: 'Bad request' });
    }
}

export const updateSchema = Joi.object({
  userId: Joi.string().min(3).max(50).required(),
  orderId: Joi.string().min(3).max(50).required()
});

export const handler = middy()
.use (validateSchema(updateSchema))
.handler(handlerFunction)


