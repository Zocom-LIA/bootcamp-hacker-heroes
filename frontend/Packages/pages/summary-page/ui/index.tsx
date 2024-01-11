
import { PriceBox } from "@zocom/price-box";
import { CartItem } from "@zocom/cart-item/";
import { Header } from "@zocom/header";
import { Button, ButtonColor, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./styles.scss"
import { cartItemType } from "@zocom/types";
import { RootState } from "../../../../src/redux/store";
import cartSimple from '../../../shared/cart-simple.svg'
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../../src/redux/slices/cartSlice";

export function SummaryPage () {
 const navigate = useNavigate();
 const cartItems = useSelector((state: RootState) => state.cart);
 const totalPrice = cartItems.reduce((total: number, item: cartItemType) => total + item.item.price * item.quantity, 0);
 const dispatch = useDispatch();

 const handleIncrement = (item: cartItemType) => {
  dispatch(updateQuantity({ SK: item.item.SK, quantity: item.quantity + 1 }));
};
const handleDecrement = (item: cartItemType) => {
  dispatch(updateQuantity({ SK: item.item.SK, quantity: item.quantity -1 }));
};

   

 return (
    <div className="App">
      <Header cart={cartSimple} />
      <ul className="cart-items">
        {cartItems.map((item: cartItemType, index:number) => (
          <CartItem key={index} title={item.item.name} quantity={item.quantity}  price={item.item.price} />
        ))}
        <Button color={ButtonColor.CLAY} size={ButtonSize.REGULAR} onClick={() => handleIncrement(cartItems[0])}>+</Button>
        <Button color={ButtonColor.CLAY} size={ButtonSize.REGULAR} onClick={() => handleDecrement(cartItems[0])}>-</Button>
      </ul>
      <span className="cart-space"></span>
        <PriceBox price={totalPrice} />
        <Button color={ButtonColor.CLAY} size={ButtonSize.STRETCH} onClick={() => navigate('/eta')}>TAKE MY MONEY!</Button>
        
      </div>
      
 );
}

