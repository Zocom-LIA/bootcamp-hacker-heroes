
import { PriceBox } from "@zocom/price-box";
import { CartItem } from "@zocom/cart-item/";
import { Header } from "@zocom/header";
import { Button, ButtonColor } from '@zocom/button';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./styles.scss"

export function SummaryPage () {
 const navigate = useNavigate();
 const cartItems = useSelector((state: any) => state.cart);
 const totalPrice = cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);
 

   

 return (
    <div className="App">
      <Header title="Header" />
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={index} title={item.title} quantity={item.quantity} price={item.price} />
        ))}
      </ul>
      <span className="cart-space"></span>
        <PriceBox price={totalPrice} />
        <Button color={ButtonColor.CLAY} onClick={() => navigate('/eta')}>TAKE MY MONEY!</Button>
        
      </div>
      
 );
}

