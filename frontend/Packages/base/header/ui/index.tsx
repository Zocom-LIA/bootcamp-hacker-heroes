
import './style.scss';


type HeaderProps = {
    title?: string
    logo?: string,
    cart?: string
  };

  
export const Header = ({ logo, title, cart }: HeaderProps) => {
    return (
        <header className="header">
            <img src={logo} alt="" />
            <h1 className="header__title">{title}</h1>
            <img src={cart} alt="" />
        </header>
    )
}