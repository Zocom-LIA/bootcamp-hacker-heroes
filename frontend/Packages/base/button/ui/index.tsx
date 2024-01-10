
import './style.scss';
import { ReactNode } from 'react';

export enum ButtonColor {
    'CLAY' = 'clay',
    'DARK-MINT' = 'dark-mint'
}

type ButtonProps = {
    children?: ReactNode | ReactNode[];
    onClick: () => void
    color?: ButtonColor
    
}

export const Button: React.FC<ButtonProps> = ({children, onClick, color}) => {
    return (
        <button className={`btn btn--${color}`} onClick={onClick}>{children}</button>
    )
}