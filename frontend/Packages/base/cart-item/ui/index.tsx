import './styles.scss';

export enum ItemParent {
    'CART' = 'cart',
    'RECEIPT' = 'receipt'
}

type cartItemProps = {
    title: string
    quantity: number
    price: number
    parentElem?: ItemParent
}

export const CartItem = ({ title, quantity, price, parentElem }: cartItemProps) => {

    return (
        <div className={`${parentElem}-item`}>
            <section className='cart_item-header'>
                <h2 className={`${parentElem}-item__title`}>{title}</h2>
                <span className="cart-item__space"></span>
                <p className={`${parentElem}-item__price`}>{price} SEK</p>
            </section>
            <p className={`${parentElem}-item__quantity`}>{quantity} stycken</p>

        </div>
    )
}