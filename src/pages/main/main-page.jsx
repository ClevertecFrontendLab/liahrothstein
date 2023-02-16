import './main-page.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";

import search from './assets/search.png';
import filterButton from './assets/filter-button.png';
import blocksButton from './assets/blocks-button.png';
import linesButton from './assets/lines-button.png';
import miniFilter from './assets/mini-filter.png';
import miniSearch from './assets/mini-search.png';
import miniCloseSearch from './assets/mini-close-search.png';
import emptyImage from './assets/empty-image.png';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Menu } from '../../components/menu';
import { useGetBooksQuery } from '../../redux';
import { FourStars } from '../../components/stars/four-stars';
import { Loader } from '../../components/loader';
import { ErrorMessage } from '../../components/error-message';
import { FiveStars } from '../../components/stars/five-stars';
import { ThreeStars } from '../../components/stars/three-stars';
import { TwoStars } from '../../components/stars/two-stars';
import { OneStar } from '../../components/stars/one-star';

export function MainPage () {
    const [isActive, setActive] = useState(true);

    const [isSearchOpen, toggleSearch] = useState(false);
    const {data = [], isError, isLoading} = useGetBooksQuery();

    return (
        <section className='main-page'>
            <Loader />
            <ErrorMessage />
        <Header />
        <div className="container">
        <Menu />
        <div className="mainBooks">
            <div className={classNames('navigationList', {loader: isLoading}, {error: isError})}>
                <div className="searchWithFilterButton">
                    <div className="search">
                        <input type="text" placeholder='Поиск книги или автора…' />
                        <img src={search} alt="search" />
                    </div>
                    <div className="filterButton"><img src={filterButton} alt="" /></div>
                </div>
                <div className={classNames('miniSearchWithFilterButton', {searchOpen: isSearchOpen})}>
                    <div className="miniSearch">
                        <button type='button' className={classNames({searchOpen: isSearchOpen})} onClick={() => {toggleSearch(!isSearchOpen)}} data-test-id='button-search-open'>
                            <img src={miniSearch} alt="search" />
                        </button>
                    </div>
                    <div className="miniFilter"><img src={miniFilter} alt="filter" /></div>
                </div>
                <div className={classNames('buttonIcons', {searchOpen: isSearchOpen})}>
                    <button type='button' onClick={() => {setActive(true)}}>
                        <div className={classNames('buttonIcon', {blocksActive: (isActive === true) ? 'active' : ''})} data-test-id='button-menu-view-window'>
                            <img src={blocksButton} alt="" />
                        </div>
                    </button>
                    <button type='button' onClick={() => {setActive(false)}}>
                        <div className={classNames('buttonIcon', {linesActive: (isActive === false) ? 'active' : ''})} data-test-id='button-menu-view-list'>
                            <img src={linesButton} alt="" />
                        </div>
                    </button>
                </div>
                <div className={classNames('searchAfterClick', {searchOpen: isSearchOpen})}>
                    <input type="text" placeholder='Поиск книги или автора…' data-test-id='input-search' />
                    <div className="closeSearch">
                        <button type='button' className={classNames({searchOpen: isSearchOpen})} onClick={() => {toggleSearch(!isSearchOpen)}} data-test-id='button-search-close'>
                            <img src={miniCloseSearch} alt="close" />
                        </button>
                    </div>
                </div>
            </div>
            <div className={classNames('bookIcons', {loader: isLoading}, {blocksActive: (isActive === true) ? 'active' : ''})}>
                {data.map(icon => (
                    <div key={icon.id} className='bookIcon'>
                        <Link to={`/books/all/${icon.id}`} id={icon.id}>
                    <div className="imageOfBook">
                        <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="book" />
                    </div>
                    {(Math.round(icon.rating) === 5) ? <FiveStars /> :
                     (Math.round(icon.rating) === 4) ? <FourStars /> :
                     (Math.round(icon.rating) === 3) ? <ThreeStars /> :
                     (Math.round(icon.rating) === 2) ? <TwoStars /> :
                     (Math.round(icon.rating) === 1) ? <OneStar /> :
                     <div className='noStars'>ещё нет оценок</div>
                    }
                        <div className="nameOfBook">{icon.title}</div>
                    <div className="author">{icon.authors}, {icon.issueYear}</div>
                        <div className="button">
                            <button type='button' data-test-id='card'>Забронировать</button>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
            <div className={classNames('bookIcons', {loader: isLoading}, {linesActive: (isActive === false) ? 'active' : ''})}>
                {data.map(icon => (
                    <div key={icon.id} className='bookIcon'>
                        <Link to={`/books/all/${icon.id}`} id={icon.id}>
                    <div className="imageOfBook">
                        <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="book" />
                    </div>
                    <div className="all">
                        <div className="nameOfBook">{icon.title}</div>
                    <div className="author">{icon.authors}, {icon.issueYear}</div>
                    <div className="starsWithButton">
                    {(Math.round(icon.rating) === 5) ? <FiveStars /> :
                     (Math.round(icon.rating) === 4) ? <FourStars /> :
                     (Math.round(icon.rating) === 3) ? <ThreeStars /> :
                     (Math.round(icon.rating) === 2) ? <TwoStars /> :
                     (Math.round(icon.rating) === 1) ? <OneStar /> :
                     <div className='noStars'>ещё нет оценок</div>
                    }
                        <div className="button">
                            <button type='button' data-test-id='card'>Забронировать</button>
                        </div>
                    </div>
                    </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
        </div>
        <Footer />
    </section>
    );
};
