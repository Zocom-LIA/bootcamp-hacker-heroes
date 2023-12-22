import { sendResponse } from '../../responses/index';
import {db} from '../../services/index'

// async function getMenu() {
//     await db.get(Params).promise
// }

exports.handler = async () => {
    
    return sendResponse(200, { success: true });
}