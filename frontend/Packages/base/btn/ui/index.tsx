import './styles.scss';
import { ReactNode } from 'react';

export enum BtnColor {
    'CLAY' = 'clay',
    'DARK-MINT' = 'dark-mint'
}

type ButtonProps = {
    children?: ReactNode | ReactNode[];
    onClick: () => void
    color?: BtnColor
    
}

export const Btn: React.FC<ButtonProps> = ({children, onClick, color}) => {
    return (
        <button className={`btn btn--${color}`} onClick={onClick}>{children}</button>
    )
}