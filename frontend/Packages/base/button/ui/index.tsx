// import './style.scss';
// import { ReactNode } from 'react';
// import { StyleTypes } from '@zocom/types';



// export enum ButtonType {
//     'REGULAR' = 'regular',
//     'STRETCH' = 'stretch',
// }


// type ButtonProps = {
//     type?: ButtonType
//     style?: StyleTypes
//     children?: ReactNode | ReactNode[];
//     onClick: () => void
    
// }



// export const Button = ({ type = ButtonType.REGULAR, style = StyleTypes.DEFAULT, children, onClick }: ButtonProps) => {
//     return (
//     <button className={`button__${type}--${style}`} onClick={() => onClick()}>{children}</button>
//     )
// }
import './style.scss';
import { ReactNode } from 'react';

export enum ButtonSize {
    'REGULAR' = 'regular',
    'STRETCH' = 'stretch'
}

export enum ButtonColor {
    'CLAY' = 'clay',
    'DARK-MINT' = 'dark-mint'
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