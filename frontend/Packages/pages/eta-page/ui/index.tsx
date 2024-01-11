import './index.scss';
// import React from 'react';
// import { Button } from '@zocom/button';
import logo from '../../../shared/logo.png'
import { Button, ButtonColor, ButtonSize } from '@zocom/button';
import { useNavigate } from 'react-router-dom' 
import { Header } from '@zocom/header';
import boxtop from '../../../shared/boxtop.svg';


export const EtaPage = () => {
    const navigate = useNavigate();
    const eta: number = Math.ceil(Math.random() *10);
    
    return (
        <div className='eta-page'>
            <Header logo={logo}/>
            <main className='eta-container'>
                <img src={boxtop} alt="boxtop" />
                <h1 className='order-status'>DINA WOTONS TILLAGAS!</h1> 
                <p className='eta-status'>ETA  {eta} MIN</p>
                <p className='order-nr'>#4kjwsdf234k</p>
            </main>
            <Button size={ButtonSize.STRETCH} onClick={() => navigate('/')}>BESTÄLL MER</Button>
            <Button color={ButtonColor.CLAY} size={ButtonSize.STRETCH} onClick={() => navigate('/receipt')}>SE KVITTO</Button>
        </div>
    )
}