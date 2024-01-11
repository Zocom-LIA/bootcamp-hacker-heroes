import './index.scss';
import { Header } from '@zocom/header';
import { Button, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom';
import logo from '../../../shared/logo.png';
import logoRed from '../../../shared/logo-red.png';
import { PriceBox } from '@zocom/price-box';

export const ReceiptPage = () => {
    const navigate =  useNavigate();
    const price:number = 120;
    return (
        <div className='receipt-page'>
            <Header logo={logo} />
            <main className='receipt-container'>
                <img className='logo-red' src={logoRed} alt="logoRed" />
                <PriceBox price={price}/>
            </main>
            <Button size={ButtonSize.STRETCH} onClick={() => navigate('/') }>GÖR EN NY BESTÄLLNING</Button>
        </div>
    )
}