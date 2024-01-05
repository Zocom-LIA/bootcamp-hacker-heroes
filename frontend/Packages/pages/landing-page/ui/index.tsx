import "./index.scss"; 
import {MenuItem} from "@zocom/menuitem";
import {Header} from "@zocom/header";


export function LandingsPage() {
   let item = {
        name:"Karlstad",
        desc:"En god friterad wonton med smaker från de värmländska skogarna.",
        ingredients:[
           "kantarell",
           "scharlottenlök",
           "morot",
           "bladpersilja"
        ],
        price:9,
   }

    return (
      <section className="landingPage">
         <Header title="Hello " />
        <main className="menu_container">
          <h1 className="menu_title">MENY</h1>
          <section className="menu_products">
            <MenuItem {...item} />
            <MenuItem {...item} />
            <MenuItem {...item} />
            <MenuItem {...item} />
            <MenuItem {...item} />
          </section>
        </main>
      </section>
    );
}
