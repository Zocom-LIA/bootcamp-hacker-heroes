import './style.scss';
import { ReactNode } from 'react';
import React from 'react';
import { StyleTypes } from '@zocom/types';



export enum ButtonType {
    'REGULAR' = 'regular',
    'STRETCH' = 'stretch',
}


type ButtonProps = {
    type?: ButtonType
    style?: StyleTypes
    children?: ReactNode | ReactNode[];
    onClick: () => void
    
}


export const Button = ({ type = ButtonType.REGULAR, style= StyleTypes.DEFAULT, children, onClick }: ButtonProps) => {
    return (
    <button className={`button__${type}`} onClick={() => onClick()}>{children}</button>)
    
}