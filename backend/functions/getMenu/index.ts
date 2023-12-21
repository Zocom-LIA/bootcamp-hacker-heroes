import { sendResponse } from '../../responses/index';


exports.handler = async () => {
    
    return sendResponse(200, { success: true });
}