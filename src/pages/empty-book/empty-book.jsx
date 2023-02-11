import { useState } from 'react';
import classNames from "classnames";

import './empty-book.css';
import commentator from './assets/commentator.png';
import arrow from './assets/arrow-off.png';
import image from './assets/image.png';

import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { FourStars } from "../../components/stars/four-stars";
import { ThreeStars } from "../../components/stars/three-stars";


export function EmptyBook () {
    const [isArrowOpen, toggleArrow] = useState(false);

    return (
        <section className='book-page'>
        <Header />
        <div className="bookMiniList">Бизнес книги  /  Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
        <div className="main">
            <div className="image"><img src={image} alt="" /></div>
            <div className="mainContent">
                <div className="header">Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</div>
                <div className="author">Адитья Бхаргава, 2019</div>
                <div className="button"><button type="button">Забронировать</button></div>
                <div className="aboutBook">О книге</div>
                <div className="aboutText">
                Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?<br /><br />
                Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.
                </div>
            </div>
        </div>
        <div className="rating">
            <div className="header">Рейтинг</div>
            <hr />
            <div className="starsWithNumbers">
                <FourStars />
                <div className="number">4.3</div>
            </div>
        </div>
        <div className="detailedInformation">
            <div className="header">Подробная информация</div>
            <hr />
            <div className="main">
                <div className="column1">
                    <div className="namesOfProperty">
                        <div className="nameOfProperty">Издательство</div>
                        <div className="nameOfProperty">Год издания</div>
                        <div className="nameOfProperty">Страниц</div>
                        <div className="nameOfProperty">Переплёт</div>
                        <div className="nameOfProperty">Формат</div>
                    </div>
                    <div className="properties">
                        <div className="property">Питер</div>
                        <div className="property">2019</div>
                        <div className="property">288</div>
                        <div className="property">Мягкая обложка</div>
                        <div className="property">70х100</div>
                    </div>
                </div>
                <div className="column2">
                    <div className="namesOfProperty">
                        <div className="nameOfProperty">Жанр</div>
                        <div className="nameOfProperty">Вес</div>
                        <div className="nameOfProperty">ISBN</div>
                        <div className="nameOfProperty">Изготовитель</div>
                    </div>
                    <div className="properties">
                        <div className="property">Компьютерная литература</div>
                        <div className="property">370 г</div>
                        <div className="property">978-5-4461-0923-4</div>
                        <div className="property">ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="headerAndNumber">
                <div className="header">Отзывы</div>
                <div className="number">2</div>
                <div className="dropdownReviewes">
                    <button type="button" className={classNames('arrowBtn', {dropdown: isArrowOpen})} onClick={() => {toggleArrow(!isArrowOpen)}}><img src={arrow} alt="arrow" /></button>
                </div>
            </div>
            <hr className={classNames({dropdown: isArrowOpen})} />
            <div className={classNames('review', {dropdown: isArrowOpen})}>
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Иван Иванов</div>
                    <div className="date">5 января 2019</div>
                </div>
                <FourStars />
            </div>
            <div className={classNames('review', 'secondReview', {dropdown: isArrowOpen})}>
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Николай Качков</div>
                    <div className="date">20 июня 2018</div>
                </div>
                <FourStars />
                <div className="comment">
                Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.
                </div>
            </div>
            <div className={classNames('review', {dropdown: isArrowOpen})}>
                <div className="container">
                    <div className="commentator"><img src={commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">Екатерина Беляева</div>
                    <div className="date">18 февраля 2018</div>
                </div>
                <ThreeStars />
            </div>
        </div>
        <div className="rateTheBook"><button type="button">оценить книгу</button></div>
        <Footer />
    </section>
    );
}