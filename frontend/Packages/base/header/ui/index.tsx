
import './style.scss';

export enum CartBackground {
    'FILLED' = 'filled',
    'NONE' = 'none'
}

const path = location.pathname;

type HeaderProps = {
    title?: string
    logo?: string,
    cart?: string
  };

  
export const Header = ({ logo, title, cart }: HeaderProps) => {
    return (
        <header className="header">
            <img className='logo' src={logo} alt="" /> 
            <h1 className="header__title">{title}</h1>
            {path === '/' || path === '/cart' ? (
                
                <section className='cart-frame'>
                    <img className='cart' src={cart} alt="" />
                </section>
            ): null} 
        </header>

    )
}