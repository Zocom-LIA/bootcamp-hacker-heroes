import "./style.scss";
import { FC } from 'react';



 type MenuItemProps = {
    name: string;
    desc?: string;
    ingredients?: string[];
    price: number;
};



export const MenuItem:FC<MenuItemProps> = ({name, desc, ingredients, price} ) => {

  //rendering the ingredients as a list separated by comma
  const ingredientsList = ingredients?.map((ingredient,index) => ingredient + (index < ingredients.length - 1 ? ", " : "")) ;

  return (
    <section className="menu_item">
      <section className="menu_item-header">
        <h2 className="menu_item-title">{name}</h2>
        <span className="menu_item-space"></span>
        <h2 className="menu_item-price">{price} SEK </h2>
      </section>
      <section className="menu_item-content">
        <p className="menu_item-description">{ingredientsList}</p>
      </section>
    </section>
  );
};


