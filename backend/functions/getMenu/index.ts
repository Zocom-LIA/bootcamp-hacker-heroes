import { sendResponse } from '@zocom/responses';
import {db} from '@zocom/services';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';

//the path is temporary using a if statement, this will be changed when we decide how to use the get statement and use one of the variants to implement it.
//The other variant will be removed.
async function getMenuItems(path: string) {
    if (path == ""){
    const params = {
        TableName: "YumYumDB",
        KeyConditionExpression: "PK = :pkVal",
        ExpressionAttributeValues: {
            ":pkVal": "Meny"
        }
    }
    try {
        const result = await db.query(params).promise();
        if (result.Count == 0){
            return sendResponse(400, {success: false, error: "No items found"})
        }
        return result;
    } catch (error) {
        console.error("Error querying DynamoDB:", error);
        throw error;
    }
    }
    else{
        const params = {
            TableName: "YumYumDB",
            KeyConditionExpression: "PK = :pkVal AND begins_with (SK, :skVal)",
            ExpressionAttributeValues: {
                ":pkVal": "Meny",
                ":skVal": path
            }
        }
        try {
            const result = await db.query(params).promise();
            if (result.Count == 0){
                return sendResponse(400, {success: false, error: "No items found"})
            }
            return result;
        } catch (error) {
            console.error("Error querying DynamoDB:", error);
            throw error;
        }
    }
}

export const handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    const path = event.pathParameters.search;
    try {
        return getMenuItems(path);
    } catch (error) {
        return sendResponse(400, { success: false, error: "Bad request" });
    }
}


