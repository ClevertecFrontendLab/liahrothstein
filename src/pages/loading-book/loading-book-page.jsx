import { Header } from "../../components/header";
import loader from './loader.png';
import './loading-book-page.css';

export function LoadingBookPage() {

    return (
        <section className="loading-main-page" data-test-id='loader'>
            <Header />
            <div className="bookMiniList">Бизнес книги  /  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
            <div className="blurBackground">
                <div className="loader"><img src={loader} alt="" /></div>
            </div>
        </section>
    );
}