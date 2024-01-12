import { APIGatewayProxyHandler } from 'aws-lambda';
import middy from '../../node_modules/@middy/core';
import httpErrorHandler from '../../node_modules/@middy/http-error-handler';
import { db } from '@zocom/services';
import { dateStamp } from '@zocom/services';
const getOrderHandler: APIGatewayProxyHandler = async () => {
 

  const params = {
    TableName: "YumYumDB",
    KeyConditionExpression: 'PK = :pkVal AND begins_with(SK, :skVal)',
    ExpressionAttributeValues: {
      ':pkVal': "Kitchen",
      ':skVal': `Order#${dateStamp()}`,
    },
  };

  try {
    const result = await db.query(params).promise();

    if (result.Items && result.Items.length > 0) {
      return {
        statusCode: 200,
        body: JSON.stringify(result.Items), 
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Order not found',}),
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