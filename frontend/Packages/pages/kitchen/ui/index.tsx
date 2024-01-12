import "./style.scss"
import { Header } from "@zocom/header"
import { KitchenOrderCard } from "@zocom/kitchen-order-card"
import logo from '../../../shared/logo.png'

export const KitchenView = () => {

   // {
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

        let order = {
            customerName: "guest",
            orderPlaced: "01:33:47",
            totalPrice: 10,
            orderId: "2024-01-12T01:33:47:0325",
            userId: "330d384f-de4a-492b-b614-d3d476c27c00",
            orderItems: [
                {
                    name: "Karlstad",
                    ingredients: [
                        "kantarell",
                        "scharlottenlök",
                        "morot",
                        "bladpersilja"
                    ],
                    price: 10,
                    desc: "wow description"
                },
                {
                    name: "Norrköping",
                    ingredients: [
                        "kantarell",
                        "scharlottenlök",
                        "morot",
                        "bladpersilja"
                    ],
                    price: 12,
                    desc: "wow description"
                },
                {
                    name: "Norrköping",
                    ingredients: [
                        "kantarell",
                        "scharlottenlök",
                        "morot",
                        "bladpersilja"
                    ],
                    price: 12,
                    desc: "wow description"
                }
            ],
            status: "active",
            SK: "Order#2024-01-12T01:33:47:0325",
            PK: "Kitchen",
            orderNr: 64987
        }

    return (
        <section className="kitchen_view">
            <Header logo={logo} title={"Kitchen view"} />
            <main className="kitchen_maincontainer">
                <section className="kitchen_ongoing">
                    <h1 className="kitchen_title">On going</h1>
                    <section className="kitchen_cards">
                        <KitchenOrderCard order = {order} />
                    </section>
                </section>
                
                <section className="kitchen_done">
                    <h1 className="kitchen_title">done</h1>
                    <section  className="kitchen_cards"></section>
                </section>
            </main>
        </section>

    );
}