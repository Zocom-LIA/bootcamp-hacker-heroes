
import './style.scss';
import { ReactNode } from 'react';

export enum ButtonSize {
    'REGULAR' = 'regular',
    'STRETCH' = 'stretch',
    'ROUND' = 'round'
}

export enum ButtonColor {
    'CLAY' = 'clay',
    'DARK-MINT' = 'dark-mint',
    'DARKGREY' = 'darkgrey'
}

type ButtonProps = {
    children?: ReactNode | ReactNode[];
    onClick: () => void
    color?: ButtonColor
    size?: ButtonSize 
    
}

export const Button: React.FC<ButtonProps> = ({children, onClick, color, size}) => {
    return (
        <button className={`btn btn--${color} btn--${size}`}  onClick={onClick}>{children}</button>
    )
}