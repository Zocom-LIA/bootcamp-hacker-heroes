import './index.scss';
import { useNavigate } from 'react-router-dom' 
import { Header } from '@zocom/header';
import boxtop from '../../../shared/boxtop.svg';
import logo from '../../../shared/logo.png'
import { Button, ButtonColor, ButtonSize } from '@zocom/button'

export const OrderDonePage = () => {
    const navigate = useNavigate();
    return (
        <div className='order-done-page'>
            <Header logo={logo}/>
            <main className='order-done-container'>
                <img src={boxtop} alt="boxtop" />
                <h1 className='order-status'>DINA WOTONS ÄR KLARA!</h1> 
                <p className='order-nr'>#4kjwsdf234k</p>
            </main>
            <Button size={ButtonSize.STRETCH} onClick={() => navigate('/')}>BESTÄLL MER</Button>
            <Button size={ButtonSize.STRETCH} color={ButtonColor['DARK-MINT']} onClick={() => navigate('/receipt')}>SE KVITTO</Button>
        </div>
    )
}