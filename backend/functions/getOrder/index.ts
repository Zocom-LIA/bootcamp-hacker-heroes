import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '../../node_modules/@middy/core';
import httpErrorHandler from '../../node_modules/@middy/http-error-handler';
import * as AWS from 'aws-sdk';
import { db } from '@zocom/services';

const getOrderHandler: APIGatewayProxyHandler = async (event) => {
 
  const requestBody = JSON.parse(event.body);
  const { userId, orderId } = requestBody;

  if (!orderId || !userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Both orderNr and userId are required in the query parameters' }),
    };
  }

  const params: AWS.DynamoDB.DocumentClient.QueryInput = {
    TableName: "YumYumDB",
    KeyConditionExpression: 'PK = :pk AND SK = :sk',
    ExpressionAttributeValues: {
      ':pk': `User#${userId}`,
      ':sk': `order#${orderId}`,
    },
  };

  try {
    const result = await db.query(params).promise();

    if (result.Items && result.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Items[0]), 
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Order not found', PK: `user#${userId}`, SK: `order#${orderNr}`, orderNr: orderNr }),
      };
    }
  } catch (error) {
    console.error('Error querying DynamoDB:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

export const handler = middy(getOrderHandler)
  .use(httpErrorHandler());