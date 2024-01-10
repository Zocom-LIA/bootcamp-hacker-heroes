
import { PriceBox } from "@zocom/price-box";
import { CartItem } from "@zocom/cart-item/";
import { Header } from "@zocom/header";
import { Button } from "@zocom/button";
import {  StyleTypes } from '@zocom/types';
import "./styles.scss"

export function SummaryPage () {
 const totalPrice = 101;
 const cartItems = [
    { title: 'KARLSTAD + 3 stycken', price: 30 },
    { title: 'HỌ CHI MINH + 2 stycken', price: 20 },
    { title: 'KINGSTON + 2 stycken', price: 20 },
    { title: 'SWEET CHILI DIP + 1 stycken', price: 10 },
    { title: 'GUACAMOLE + 1 stycken', price: 10 },
 ];

   

 return (
    <div className="App">
      <Header title="Header" />
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={index} title={item.title} price={item.price} />
        ))}
      </ul>
      <span className="cart-space"></span>
        <PriceBox price={totalPrice} />
        
        
      </div>
      
 );
}

