import { sendResponse } from '../../responses/index';
import {db} from '../../services/index';
import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from 'aws-lambda';


async function getMenuItems(path) {
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

exports.handler = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> => {
    const path = event.pathParameters.search;
    try {
        console.log(path);
        return getMenuItems(path);
    } catch (error) {
        return sendResponse(400, { success: false, error: "Bad request" });
    }
}


