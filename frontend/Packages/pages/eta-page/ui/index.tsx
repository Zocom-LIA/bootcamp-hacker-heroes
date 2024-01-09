import './index.scss';
// import React from 'react';
// import { Button } from '@zocom/button';
import { Btn, BtnColor } from '@zocom/btn';
import { useNavigate } from 'react-router-dom' 
import { Header } from '@zocom/header';
import boxtop from './boxtop.svg';

export const EtaPage = () => {
    const navigate = useNavigate();
    const eta: number = Math.ceil(Math.random() *10);
    
    return (
        <div className='eta-page'>
            <Header title='Header'/>
            <main className='eta-container'>
                <img src={boxtop} alt="boxtop" />
                <h1 className='order-status'>DINA WOTONS TILLAGAS!</h1> 
                <p className='eta-status'>ETA  {eta} MIN</p>
                <p className='order-nr'>#4kjwsdf234k</p>
            </main>
            <Btn onClick={() => navigate('/')}>BESTÄLL MER</Btn>
            <Btn color={BtnColor.CLAY} onClick={() => navigate('/receipt')}>SE KVITTO</Btn>
        </div>
    )
}