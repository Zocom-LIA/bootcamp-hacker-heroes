import './style.scss';
import { ReactNode } from 'react';
import React from 'react';

type HeaderProps = {
    title: string;
    logo?: ReactNode
  };

  
export const Header = ({ title }: HeaderProps) => {
    return (
        <header className="header">
            <h1 className="header__title">{title}</h1>
        </header>
    )
}