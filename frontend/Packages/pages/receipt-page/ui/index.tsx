import './index.scss';
import { Header } from '@zocom/header';
import { Button, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom';
import logo from '../../../shared/logo.png';
import logoRed from '../../../shared/logo-red.png';
import { PriceBox } from '@zocom/price-box';
import { useEffect, useState } from 'react';
import { CartItem } from '@zocom/cart-item';

type OrderItemProps = {
    name: string,
    desc: string,
    ingredients: string[],
    price: number
}[]

export const ReceiptPage = () => {
    const [orderItems, setOrderItems] = useState<OrderItemProps>([]);
    const [wotonName, setWotonName] = useState([]);
    const navigate =  useNavigate();
    const price:number = 120;

    

    async function getOrder(orderId:object) {
        const HOST = import.meta.env.VITE_HOST;
        const body = orderId;

        try {
            const response = await fetch(
                `${HOST}/api/orders/kvitto`,
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                    "Content-Type": "application/json"
                    }
                }
            )
            const result = await response.json();
            // console.log(result);
            return result;
        }   catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        async function listOrderItems() {
            const orderId = {
                orderId: '2024-01-12T00:49:56:0170'
            }
            
            try {
                const allItems = await getOrder(orderId);
                // console.log(allItems.orderItems);
                setOrderItems(allItems.orderItems);
                
        
            } catch (error) {
                console.log(error);
            }
        }
        listOrderItems();
    }, []);
         
                
    console.log(orderItems); 
    const itemName:Array<string> = []
    const findDuplicates = orderItems.map((item) => {
       return itemName.push(item.name)
    })
    console.log(itemName)
    
    const renderItems = orderItems.map((item) => {
        return <CartItem title={item.name} quantity={1} price={item.price}/>
    })

    
    
    return (
        <div className='receipt-page'>
            <Header logo={logo} />
            <main className='receipt-container'>
                <img className='logo-red' src={logoRed} alt="logoRed" />
                <h1 className='receipt-title'>KVITTO</h1>
                <p className='order-nr'>#4kjwsdf234k</p>
                {renderItems}
                <PriceBox price={price}/>
            </main>
            <Button size={ButtonSize.STRETCH} onClick={() => navigate('/') }>GÖR EN NY BESTÄLLNING</Button>
        </div>
    )
}