import './styles.scss';
import React from 'react';


type cartItemProps = {
    title: string
    price: number

}

export const CartItem = ({ title, price }: cartItemProps) => {

    return (
        <div className="cart-item">
            <p className="cart-item__title">{title}</p>
            <span className="cart-item__space"></span>
            <p className="cart-item__price">{price}</p>
        </div>
    )
}