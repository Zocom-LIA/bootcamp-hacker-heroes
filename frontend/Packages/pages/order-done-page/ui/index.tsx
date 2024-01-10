import './index.scss';
import { useNavigate } from 'react-router-dom' 
import { Header } from '@zocom/header';
import boxtop from './boxtop.svg';
// import { Btn, BtnColor } from '@zocom/btn'
import { Button, ButtonColor } from '@zocom/button'

export const OrderDonePage = () => {
    const navigate = useNavigate();
    return (
        <div className='order-done-page'>
            <Header title='Header'/>
            <main className='order-done-container'>
                <img src={boxtop} alt="boxtop" />
                <h1 className='order-status'>DINA WOTONS ÄR KLARA!</h1> 
                <p className='order-nr'>#4kjwsdf234k</p>
            </main>
            <Button onClick={() => navigate('/')}>BESTÄLL MER</Button>
            <Button color={ButtonColor['DARK-MINT']} onClick={() => navigate('/receipt')}>SE KVITTO</Button>
        </div>
    )
}