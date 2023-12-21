import { sendResponse } from '../../responses';


exports.handler = async () => {
    
    return sendResponse(200, { success: true });
}