import { Button, ButtonSize} from "@zocom/button";
import "./style.scss";
import { FC } from 'react';
// [
//     {
//         "customerName": "guest",
//         "orderPlaced": "01:33:47",
//         "totalPrice": 10,
//         "orderId": "2024-01-12T01:33:47:0325",
//         "userId": "330d384f-de4a-492b-b614-d3d476c27c00",
//         "orderItems": [
//             {
//                 "name": "My name is",
//                 "ingredients": [
//                     "kantarell",
//                     "scharlottenlök",
//                     "morot",
//                     "bladpersilja"
//                 ],
//                 "price": 10,
//                 "desc": "wow description"
//             }
//         ],
//         "status": "active",
//         "SK": "Order#2024-01-12T01:33:47:0325",
//         "PK": "Kitchen",
//         "orderNr": 64987
//     },
//     
// ]

type orderProp = {
       order: {
        customerName: string,
        orderPlaced: string,
        totalPrice: number,
        orderId: string,
        userId: string,
        orderItems: {
            name: string,
            ingredients: string[],
            price: number,
            desc: string
        }[],
        status: string,
        SK: string,
        PK: string,
        orderNr: number 
    }
}   


export const KitchenOrderCard:FC<orderProp>  = ({order}) => {
    

    
    return (
        <article className="order_card">
            <p className="order_card-ordernumber">#{order.orderNr}</p>
            <section className="order_card-items">
                {order.orderItems.map((item, index) => {
                   
                    return (
                      <section className="order_card-item" key={index}>
                        <section className="order_card-item-info">
                          <p className="order_card-item-name">{item.name}</p>
                          <span className="order_card-item-space"></span>
                          <p className="order_card-item-quantity"> st </p>
                        </section>

                        <p className="order_card-item-price">{item.price} sek</p>
                      </section>
                    );
                })}
            </section>
            <p className="order_card-totalPrice"> 125 sek</p>
            <p className="order_card-orderTime">Väntat i 2:33</p>
            <Button size={ButtonSize.STRETCH} onClick={() => console.log("beställ mer")} >REDO ATT SERVERAS</Button>

        </article>
    )
}