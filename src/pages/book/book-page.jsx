import { useState } from 'react';
import classNames from "classnames";
import { useParams } from 'react-router-dom';

import './book-page.css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import commentator from './assets/commentator.png';
import arrow from './assets/arrow-off.png';
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { FourStars } from '../../components/stars/four-stars';
import { ThreeStars } from '../../components/stars/three-stars';
import { Slider } from '../../components/slider';
import { useGetIdBookQuery } from '../../redux';
import { LoadingBookPage } from '../loading-book';
import { ErrorBookPage } from '../error-book';

export function BookPage () {
    const [isArrowOpen, toggleArrow] = useState(false);
    const { id } = useParams();
    const {data = [], isError, isLoading} = useGetIdBookQuery(id);

    if (isLoading) return <LoadingBookPage />
    if (isError) return <ErrorBookPage />

    return (
        <section className='book-page'>
        <Header />
        <div className="bookMiniList">{data?.categories}  /  {data?.title}</div>
        <div className="main">
            <Slider />
            <div className="mainContent">
                <div className="header">{data?.title}</div>
                <div className="author">{data?.authors}, {data?.issueYear}</div>
                <div className="button"><button type="button">Забронировать</button></div>
                <div className="aboutBook">О книге</div>
                <div className="aboutText">{data?.description}</div>
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
                        <div className="property">{data?.publish}</div>
                        <div className="property">{data?.issueYear}</div>
                        <div className="property">{data?.pages}</div>
                        <div className="property">{data?.cover}</div>
                        <div className="property">{data?.format}</div>
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
                        <div className="property">{data?.categories}</div>
                        <div className="property">{data?.weight} г</div>
                        <div className="property">{data?.ISBN}</div>
                        <div className="property">{data?.producer}</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="reviews">
            <div className="headerAndNumber">
                <div className="header">Отзывы</div>
                <div className="number">2</div>
                <div className="dropdownReviewes">
                    <button type="button" className={classNames('arrowBtn', {dropdown: isArrowOpen})} onClick={() => {toggleArrow(!isArrowOpen)}} data-test-id='button-hide-reviews'><img src={arrow} alt="arrow" /></button>
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
        <div className="rateTheBook"><button type="button" data-test-id='button-rating'>оценить книгу</button></div>
        <Footer />
    </section>
    );
};
