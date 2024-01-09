import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '../../node_modules/@middy/core';
import httpErrorHandler from '../../node_modules/@middy/http-error-handler';
import httpJsonBodyParser from '../../node_modules/@middy/http-json-body-parser';
import * as AWS from 'aws-sdk';
import { db } from '@zocom/services';

const getOrderHandler: APIGatewayProxyHandler = async (event) => {
  // Extract orderNr from the query parameters
  const orderNr = event.queryStringParameters?.orderNr;

  if (!orderNr) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'orderNr is required in the query parameters' }),
    };
  }

  const params: AWS.DynamoDB.DocumentClient.QueryInput = {
    TableName: "YumYumDB",
    KeyConditionExpression: 'orderNr = :orderNr',
    ExpressionAttributeValues: {
      ':orderNr': orderNr,
    },
  };

  try {
    const result = await db.query(params).promise();

    if (result.Items && result.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Items[0]), // Assuming orderNr is unique, so we take the first item
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Order not found' }),
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
  .use(httpJsonBodyParser())
  .use(httpErrorHandler());