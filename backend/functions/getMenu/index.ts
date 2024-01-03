import { sendResponse } from '../../responses/index';
import {db} from '../../services/index'

async function getMenu(menu) {
    const params = {
        TableName: "menu_table",
    }
    await db.get(params).promise
}

exports.handler = async () => {
    
    return sendResponse(200, { success: true });
}