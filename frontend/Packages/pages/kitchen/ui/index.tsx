import "./style.scss"
import { Header } from "@zocom/header"
import logo from '../../../shared/logo.png'

export const KitchenView = () => {
    return (
        <section className="kitchen_view">
            <Header logo={logo} title={"Kitchen view"} />
            <main className="kitchen_maincontainer">
                <section className="kitchen_ongoing">
                    <h1 className="kitchen_title">On going</h1>
                    <section className="kitchen_cards"></section>
                </section>
                
                <section className="kitchen_done">
                    <h1 className="kitchen_title">done</h1>
                    <section className="kitchen_cards"></section>
                </section>
            </main>
        </section>

    );
}