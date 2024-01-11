import "./style.scss";
import { FC } from 'react';
import {Button} from "@zocom/button";
import { StyleTypes } from '@zocom/types';

type dipItem = {
    name: string;
    price: number;
    desc?: string;
};

 type MenuItemProps = {
    name: string;
    desc?: string;
    ingredients?: string[];
    price: number;
    isDip?: boolean;
    dip?: dipItem[];
    onClick?: () => void;
};




export const MenuItem:FC<MenuItemProps> = ({name, desc, ingredients, price,isDip=false,dip,onClick} ) => {

  //rendering the ingredients as a list separated by comma
  const ingredientsList = ingredients?.map((ingredient,index) => ingredient + (index < ingredients.length - 1 ? ", " : "")) ;

  return (
    <section className="menu_item" onClick={onClick}>
      <section className="menu_item-header">
        <h2 className="menu_item-title">{name}</h2>
        <span className="menu_item-space"></span>
        <h2 className="menu_item-price">{price} SEK </h2>
      </section>
      <section className="menu_item-content">
        {!isDip ? (
          <p className="menu_item-description">{ingredientsList}</p>
        ) : (
          // Dipsås

          dip &&
          dip.map((dipItem, index) => (
            <Button
              key={index}
              onClick={() => console.log(dipItem)}
              style={StyleTypes.LIGHT}
            >
              {dipItem.name}
            </Button>
          ))
        )}
      </section>
    </section>
  );
};


