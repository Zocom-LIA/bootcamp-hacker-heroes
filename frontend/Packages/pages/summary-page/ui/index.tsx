
import { PriceBox } from "@zocom/price-box";
import { CartItem } from "@zocom/cart-item/";
import { Header } from "@zocom/header";
import { Button, ButtonColor, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom'
import "./styles.scss"
import cartSimple from '../../../shared/cart-simple.svg'

export function SummaryPage () {
 const navigate = useNavigate();
 const totalPrice = 101;
 const cartItems = [
    { title: 'KARLSTAD', quantity: 3, price: 30 },
    { title: 'HỌ CHI MINH ',quantity: 2, price: 20 },
    { title: 'KINGSTON ',quantity: 2, price: 20 },
    { title: 'SWEET CHILI DIP ',quantity: 1, price: 10 },
    { title: 'GUACAMOLE ',quantity: 1, price: 10 },
 ];

   

 return (
    <div className="App">
      <Header cart={cartSimple} />
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <CartItem key={index} title={item.title} quantity={item.quantity} price={item.price} />
        ))}
      </ul>
      <span className="cart-space"></span>
        <PriceBox price={totalPrice} />
        <Button size={ButtonSize.STRETCH} color={ButtonColor.CLAY} onClick={() => navigate('/eta')}>TAKE MY MONEY!</Button>
        
      </div>
      
 );
}

