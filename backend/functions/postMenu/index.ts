import { sendResponse } from '../../responses/index';
import {db} from '../../services/index'

// export const menu_db: string = "menu_table";


export interface Menu {
    menuId: string;
    wontons: Wontons[];
}

export interface Wontons {
    name: string;
    desc: string;
    ingredients: string[];
    price: number;
}


async function postMenu(menu: Menu) {
   try {
    const params = {
        TableName: "menu_table",
        Item: menu
    }
    await db.put(params).promise();
    console.log("ok?");
    return sendResponse(200, { success: true } );
   } catch (error) {
    console.error('DynamoDB Error:', error);
    return sendResponse(500, { success: false, error: 'Internal server error' });
   }
}

exports.handler = async (event) => {
    console.log("Hello");
    console.log(event.body);
    // const MenuItems = JSON.parse(event.body);
    // console.log(MenuItems);
    // return postMenu(event.body);

    try {
        const requestBody = JSON.parse(event.body);
        console.log(requestBody);
        return postMenu(requestBody);
    } catch (error) {
        console.error('Error parsing request', error);
        return sendResponse(400, { success: false, error: 'Bad request' });
    }
}