import './style.scss';
import { ReactNode } from 'react';
import React from 'react';



export enum ButtonType {
    'REGULAR' = 'regular',
    'STRETCH' = 'stretch',
}


type ButtonProps = {
    type?: ButtonType
    children?: ReactNode | ReactNode[];
    onClick: () => void
    
}


export const Button = ({ type = ButtonType.REGULAR, children, onClick }: ButtonProps) => {
    return (
    <button className={`button__${type}`} onClick={() => onClick()}>{children}</button>)
    
}