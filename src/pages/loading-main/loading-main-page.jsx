import { Header } from "../../components/header";
import { Menu } from "../../components/menu";

import './loading-main-page.css';
import loader from './loader.png';

export function LoadingMainPage() {

    return (
        <section className="loading-main-page" data-test-id='loader'>
            <Header />
            <div className="container">
                <Menu />
            </div>
            <div className="blurBackground">
                <div className="loader"><img src={loader} alt="" /></div>
            </div>
        </section>
    );
}