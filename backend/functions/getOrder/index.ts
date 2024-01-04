import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '../../node_modules/@middy/core';
import httpErrorHandler from '../../node_modules/@middy/http-error-handler';
import httpJsonBodyParser from '../../node_modules/@middy/http-json-body-parser';
import * as AWS from 'aws-sdk';
import {db} from '../../services/index';


const getOrderHandler: APIGatewayProxyHandler = async () => {
  const params: AWS.DynamoDB.DocumentClient.ScanInput = {
    TableName: "YumYumDB",
  };

  const result = await db.scan(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};

export const handler = middy(getOrderHandler)
  .use(httpJsonBodyParser()) // Middleware to parse JSON request body
  .use(httpErrorHandler()); // Middleware to handle HTTP errors