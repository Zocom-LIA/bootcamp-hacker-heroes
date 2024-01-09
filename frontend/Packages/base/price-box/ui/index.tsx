import './styles.scss';
import React from 'react';


type totalPriceProps = {
    price: number

}

export const PriceBox = ({ price }: totalPriceProps) => {
    return (
        <div className="price-box">
            <h3>Total</h3>
            <p> inkl 20% moms</p>
            <h3 className='price'>{price} SEK</h3>
        </div>
    );
}