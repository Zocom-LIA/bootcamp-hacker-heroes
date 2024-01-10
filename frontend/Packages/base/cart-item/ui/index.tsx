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
            <h2 className="cart-item__title">{title}</h2>
            <span className="cart-item__space"></span>
            <p className="cart-item__price">{price} SEK</p>
            <p className="cart-item__quantity">{quantity} stycken</p>
        </div>
    )
}