import { APIGatewayProxyHandler } from 'aws-lambda';
import * as AWS from 'aws-sdk';

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.ORDER_TABLE;

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const params: AWS.DynamoDB.DocumentClient.ScanInput = {
      TableName: tableName,
    };

    const result = await dynamoDb.scan(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (error) {
    console.error('Error fetching orders:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch orders' }),
    };
  }
};