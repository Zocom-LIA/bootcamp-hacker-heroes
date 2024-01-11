
import { PriceBox } from "@zocom/price-box";
import { CartItem } from "@zocom/cart-item/";
import { Header } from "@zocom/header";
import { Button, ButtonColor, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./styles.scss"

import cartSimple from '../../../shared/cart-simple.svg'

import { cartItemType } from "@zocom/types";


export function SummaryPage () {
 const navigate = useNavigate();
 const cartItems = useSelector((state: any) => state.cart);
 const totalPrice = cartItems.reduce((total: number, item: cartItemType) => total + item.price * item.quantity, 0);
 

   

 return (
    <div className="App">
      <Header cart={cartSimple} />
      <ul className="cart-items">
        {cartItems.map((item: cartItemType, index:number) => (
          <CartItem key={index} title={item.name} quantity={item.quantity} price={item.price} />
        ))}
      </ul>
      <span className="cart-space"></span>
        <PriceBox price={totalPrice} />
        <Button size={ButtonSize.STRETCH} color={ButtonColor.CLAY} onClick={() => navigate('/eta')}>TAKE MY MONEY!</Button>
        
      </div>
      
 );
}

