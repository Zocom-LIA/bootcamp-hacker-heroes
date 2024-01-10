import "./index.scss"; 
import {MenuItem} from "@zocom/menuitem";
import {Header} from "@zocom/header";
import { dipItemType, wontonsItemType } from "@zocom/types";
import { useEffect, useState } from "react";
import { useData } from "../data/index";

export function LandingsPage() {
   const [wantons, setWantons] = useState<wontonsItemType[]>([]);
   const [dipItems, setDipItems] = useState<dipItemType[]>([]);
    
   const {getMenu} = useData();
  useEffect(() => {
    getMenu().then((res) => {
     console.log(res.Items);
    });

  }, []);

   
    return (
      <section className="landingPage">
        <Header title="Header  " />
        <main className="menu_container">
          <h1 className="menu_title">MENY</h1>
          <section className="menu_products">
            
          {/* render the wantons */}
          {wantons.length > 0 ? wantons.map((item, index) => (
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
           { dipItems.length > 0 ?  <MenuItem
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
