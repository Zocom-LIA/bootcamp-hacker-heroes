import "./index.scss"; 
import {MenuItem} from "@zocom/menuitem";
import {Header} from "@zocom/header";


export function LandingsPage() {

   let wantons = [
    {
       "name":"Karlstad",
       "desc":"En god friterad wonton med smaker från de värmländska skogarna.",
       "ingredients":[
          "kantarell",
          "scharlottenlök",
          "morot",
          "bladpersilja"
       ],
       "price":9
    },
    {
       "name":"Bangkok",
       "desc":"En god friterad wonton med smaker från Bangkoks gator.",
       "ingredients":[
          "morot",
          "salladslök",
          "chili",
          "kokos",
          "lime",
          "koriander"
       ],
       "price":9
    },
    {
       "name":"Ho Chi Minh",
       "desc":"En god friterad wonton med smaker från vietnams matkultur.",
       "ingredients":[
          "kål",
          "morot",
          "salladslök",
          "chili",
          "vitlök",
          "ingefära",
          "tofu"
       ],
       "price":9
    },
    {
       "name":"Paris",
       "desc":"En god friterad wonton med smaker från det franska köket.",
       "ingredients":[
          "kål",
          "honung",
          "chevré",
          "basilika",
          "valnötspasta"
       ],
       "price":9
    },
    {
       "name":"Oaxaca",
       "desc":"En god friterad wonton med smaker från mexicos kryddiga matkultur.",
       "ingredients":[
          "majs",
          "tomat",
          "rostade ärtor",
          "vitlök",
          "lime"
       ],
       "price":9
    }
 ];


   let dipItems = [
    {
       "name":"Sweet Chili",
       "desc":"Stark och söt dip från Thailänska höglandet.",
       "price":19
    },
    {
       "name":"Sweet n Sour",
       "desc":"Klassiska sötsura dipsåsen från Kina.",
       "price":19
    },
    {
       "name":"Guacamole",
       "desc":"Avocado, tomat och kryddor i optimal kombination.",
       "price":19
    },
    {
       "name":"Wonton Standard",
       "desc":"Smaksatt olja med soya, chili, vitlök & ingefära.",
       "price":19
    },
    {
       "name":"Hot Mango",
       "desc":"Kryddstark och söt chunky mangodip.",
       "price":19
    },
    {
       "name":"Chili Mayo",
       "desc":"Egengjord majonäs smaksatt med chili.",
       "price":19
    }
 ]
    


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
