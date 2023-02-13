import './main-page.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";

import search from './assets/search.png';
import filterButton from './assets/filter-button.png';
import buttonIconOn from './assets/button-icon-on.png';
import buttonIconOff from './assets/button-icon-off.png';
import miniFilter from './assets/mini-filter.png';
import miniSearch from './assets/mini-search.png';
import miniCloseSearch from './assets/mini-close-search.png';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';
import { Menu } from '../../components/menu';
import { useGetBooksQuery } from '../../redux';
import { FourStars } from '../../components/stars/four-stars';
import { ErrorMainPage } from '../error-main';
import { LoadingMainPage } from '../loading-main';


export function MainPage () {
    const [isSearchOpen, toggleSearch] = useState(false);
    const {data = [], isError, isLoading} = useGetBooksQuery();

    if (isError) return <ErrorMainPage />
    if (isLoading) return <LoadingMainPage />

    return (
        <section className='main-page'>
        <Header />
        <div className="container">
        <Menu />
        <div className="mainBooks">
            <div className="navigationList">
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
                    <div className="buttonIcon" data-test-id='button-menu-view-window'><img src={buttonIconOn} alt="" /></div>
                    <div className="buttonIcon" data-test-id='button-menu-view-list'><img src={buttonIconOff} alt="" /></div>
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
            <div className="bookIcons">
                {data.map(icon => (
                    <div key={icon.id} className='bookIcon'>
                        <Link to={`/books/all/${icon.id}`} id={icon.id}>
                    <div className="imageOfBook">
                        <img src={`https://strapi.cleverland.by${icon?.image?.url}`} alt="book" />
                    </div>
                    <FourStars />
                        <div className="nameOfBook">{icon.title}</div>
                    <div className="author">{icon.authors}, {icon.issueYear}</div>
                        <div className="button">
                            <button type='button' data-test-id='card'>Забронировать</button>
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
