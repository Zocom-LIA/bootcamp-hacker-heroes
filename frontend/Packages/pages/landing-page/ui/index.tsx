import "./index.scss"; 
import {MenuItem} from "@zocom/menuitem";
import {Header} from "@zocom/header";
import { dipItemType, wontonsItemType } from "@zocom/types";
import { useEffect, useState } from "react";
import { useData } from "../data/index";
import { useDispatch } from "react-redux";
import { addDip, addWonton } from "../../../../src/redux/slices/menuSlice";


export function LandingsPage() {
   const [wontons, setWontons] = useState<wontonsItemType[] | null>([]);
   const [dipItems, setDipItems] = useState<dipItemType[] | null>([]);
   const {getWontonsMenu,getDipsMenu} = useData();
  const dispatch = useDispatch(); 

  useEffect(() => {
    getWontonsMenu().then((res) => {
      setWontons(res ? res:null);
      res && res.forEach(item => {
        dispatch(addWonton(item));
      });
     console.log(res);
    });

    getDipsMenu().then((res)=> {
      setDipItems(res ? res:null ); 
      res && res.forEach(item => {
        dispatch(addDip(item));
      });

      console.log(res);
    });

  }, []);

   
    return (
      <section className="landingPage">
        <Header title="Header  " />
        <main className="menu_container">
          <h1 className="menu_title">MENY</h1>
          <section className="menu_products">
            
          {/* render the wantons */}
          {wontons && wontons.length > 0 ? wontons.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                desc={item.desc}
                ingredients={item.ingredients}
                price={item.price}
              />
            ))
            : null
            }

            
            {/* render the dips */}
           {dipItems &&  dipItems.length > 0 ?  <MenuItem
                name={"Dipsås"}
                price={19}
                isDip={true}
                dip= {dipItems}
              />
              : null
            }
          </section>
        </main>
      </section>
    );
}
