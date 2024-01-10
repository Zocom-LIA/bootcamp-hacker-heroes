import './styles.scss';
import React from 'react';


type cartItemProps = {
    title: string
    quantity: number
    price: number

}

export const CartItem = ({ title, quantity, price }: cartItemProps) => {

    return (
        <div className="cart-item">
            <p className="cart-item__title">{title}</p>
            <p className="cart-item__quantity">{quantity}</p>
            <span className="cart-item__space"></span>
            <p className="cart-item__price">{price}</p>
        </div>
    )
}