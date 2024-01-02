import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.ORDER_TABLE;

const getOrderHandler: APIGatewayProxyHandler = async () => {
  const params: AWS.DynamoDB.DocumentClient.ScanInput = {
    TableName: tableName,
  };

  const result = await dynamoDb.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};

export const handler = middy(getOrderHandler)
  .use(httpJsonBodyParser()) // Middleware to parse JSON request body
  .use(httpErrorHandler()); // Middleware to handle HTTP errors