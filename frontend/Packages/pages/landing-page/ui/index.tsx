import "./index.scss"; 
import {MenuItem} from "@zocom/menuitem";
import {Header} from "@zocom/header";
import { dipItemType, wontonsItemType } from "@zocom/types";
import { useEffect, useState } from "react";
import { useData } from "../data/index";
import { useDispatch } from "react-redux";
import { addDip, addWonton } from "../../../../src/redux/slices/menuSlice";
import { addToCart } from "../../../../src/redux/slices/cartSlice";


export function LandingsPage() {
   const [wontons, setWontons] = useState<wontonsItemType[] | null>([]);
   const [dipItems, setDipItems] = useState<dipItemType[] | null>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const {getWontonsMenu,getDipsMenu} = useData();
   const dispatch = useDispatch(); 
   


  const addItemToCart = (item: wontonsItemType) => {
    const cartItem = {
      item,
      quantity: 1,
    }
    dispatch(addToCart(cartItem));  
  }

  useEffect(() => {
    // get the menu from the api
    setIsLoading(true);
    getWontonsMenu().then((res) => {
      setWontons(res ? res:null);
      res && res.forEach(item => {
        dispatch(addWonton(item));
      });
      
    });
    
    getDipsMenu().then((res)=> {
      setDipItems(res ? res:null ); 
      res && res.forEach(item => {
        dispatch(addDip(item));
      });
    });
    setIsLoading(false);
  }, []);

   
    return (
      <section className="landingPage">
        <Header title="Header  " />
        <main className="menu_container">
          <h1 className="menu_title">MENY</h1>
          <section className="menu_products">
            {/* render the wantons */}
            {isLoading ? <p>Loading...</p> : null}
            {!isLoading && wontons && wontons.length > 0
              ? wontons.map((item, index) => (
                  // Wonton menu item component
                  <MenuItem
                    key={index}
                    name={item.name}
                    desc={item.desc}
                    ingredients={item.ingredients}
                    price={item.price}
                    onClick={() => addItemToCart(item)}
                  />
                ))
              : null}

            {/* render the dips */}
            {!isLoading && dipItems && dipItems.length > 0 ? (

              //dip menu item component
              <MenuItem
                name={"Dipsås"}
                price={19}
                isDip={true}
                dip={dipItems}
              />
            ) : null}
          </section>
        </main>
      </section>
    );
}
