import './styles.scss';
import { ItemParent } from '@zocom/cart-item';



type totalPriceProps = {
    price: number,
    parentElem: ItemParent

}

export const PriceBox = ({ price, parentElem }: totalPriceProps) => {
    return (
        <div className='container'>
            <div className='price-box'>
                <section className='total'>
                    <h3 className={`${parentElem}-total`}>Total</h3>
                    <p className={`${parentElem}-moms`}> inkl 20% moms</p>
                </section>
                <h3 className={`${parentElem}-price`}>{price} SEK</h3>

            </div>
        </div>
    );
}