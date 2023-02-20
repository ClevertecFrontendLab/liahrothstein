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
import { Slider } from '../../components/slider';
import { useGetIdBookQuery } from '../../redux';
import { Loader } from '../../components/loader';
import { ErrorMessage } from '../../components/error-message';
import { Stars } from '../../components/stars';

export function BookPage () {
    const [isArrowOpen, toggleArrow] = useState(false);
    const { id } = useParams();
    const {data = [], isError, isLoading} = useGetIdBookQuery(id);

    return (
        <section className='book-page'>
            <Loader />
            <ErrorMessage />
        <Header />
        <div className="bookMiniList">{data?.categories || 'Бизнес книги'}  /  {data?.title}</div>
        <div className={classNames('main', {loader: isLoading}, {error: isError})}>
            <Slider />
            <div className="mainContent">
                <div className="header">{data?.title}</div>
                <div className="author">{data?.authors}, {data?.issueYear}</div>
                <div className="button"><button type="button">Забронировать</button></div>
                <div className="aboutBook">О книге</div>
                <div className="aboutText">{data?.description}</div>
            </div>
        </div>
        <div className={classNames('rating', {loader: isLoading}, {error: isError})}>
            <div className="header">Рейтинг</div>
            <hr />
            <div className="starsWithNumbers">
                {(data?.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                     <Stars count={Math.round(data?.rating)} />
                    }
                <div className="number">{data?.rating}</div>
            </div>
        </div>
        <div className={classNames('detailedInformation', {loader: isLoading}, {error: isError})}>
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
        <div className={classNames('reviews', {loader: isLoading}, {error: isError})}>
            <div className="headerAndNumber">
                <div className="header">Отзывы</div>
                <div className="number">{data?.comments?.length}</div>
                <div className="dropdownReviewes">
                    <button type="button" className={classNames('arrowBtn', {dropdown: isArrowOpen})} onClick={() => {toggleArrow(!isArrowOpen)}} data-test-id='button-hide-reviews'><img src={arrow} alt="arrow" /></button>
                </div>
            </div>
            <hr className={classNames({dropdown: isArrowOpen})} />
            {data?.comments?.map((val) => (
                <div key={val?.id} className={classNames('review', 'secondReview', {dropdown: isArrowOpen})}>
                <div className="container">
                    <div className="commentator"><img src={(typeof val?.user?.avatarUrl === 'string') ? `https://strapi.cleverland.by${val?.user?.avatarUrl}` : commentator} alt="commentator" /></div>
                    <div className="nameOfPerson">{val?.user?.firstName} {val?.user?.lastName}</div>
                    <div className="date">
                        {val?.createdAt?.slice(8, 10)}
                        {(val?.createdAt?.slice(5, 7)) === '01' ? ' января ' :
                        (val?.createdAt?.slice(5, 7)) === '02' ? ' февраля ' :
                        (val?.createdAt?.slice(5, 7)) === '03' ? ' марта ' :
                        (val?.createdAt?.slice(5, 7)) === '04' ? ' апреля ' :
                        (val?.createdAt?.slice(5, 7)) === '05' ? ' мая ' :
                        (val?.createdAt?.slice(5, 7)) === '06' ? ' июня ' :
                        (val?.createdAt?.slice(5, 7)) === '07' ? ' июля ' :
                        (val?.createdAt?.slice(5, 7)) === '08' ? ' августа ' :
                        (val?.createdAt?.slice(5, 7)) === '09' ? ' сентября ' :
                        (val?.createdAt?.slice(5, 7)) === '10' ? ' октября ' :
                        (val?.createdAt?.slice(5, 7)) === '11' ? ' ноября ' :
                        ' декабря ' 
                        }
                        {val?.createdAt?.slice(0, 4)}</div>
                </div>
                {(val?.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                     <Stars count={Math.round(val?.rating)} />
                    }
                <div className="comment">{val?.text}</div>
            </div>
            ))}
        </div>
        <div className={classNames('rateTheBook', {loader: isLoading}, {error: isError})}><button type="button" data-test-id='button-rating'>оценить книгу</button></div>
        <Footer />
    </section>
    );
};
