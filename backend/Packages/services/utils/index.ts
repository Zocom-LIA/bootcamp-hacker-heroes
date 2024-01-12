const { DocumentClient } = require('aws-sdk/clients/dynamodb');
import { sendResponse } from "@zocom/responses";

export const db = new DocumentClient({
    region: process.env.AWS_REGION
})

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




const timeOffset = 1; 

export const dateStamp = () => {
  const currentDate = new Date();
  return `${currentDate.toISOString().slice(0, 10)}`};
export const hourStamp = () => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + timeOffset);
  return `${currentDate.toISOString().slice(11, 19)}`};
export const timeStamp = () => {
  const currentDate = new Date();
  currentDate.setHours(currentDate.getHours() + timeOffset);
  const milliseconds = String(currentDate.getMilliseconds()).padStart(4, '0'); 
  return `${currentDate.toISOString().slice(0, 19)}:${milliseconds}`};
