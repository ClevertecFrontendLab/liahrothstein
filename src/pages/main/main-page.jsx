import './main-page.css';

import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';
import { Loader } from '../../components/loader';
import { ErrorMessage } from '../../components/error-message';
import { Stars } from '../../components/stars';

export function MainPage () {
    const [isActive, setActive] = useState(true);
    const [isRating, setRating] = useState(false);

    const [isSearchOpen, toggleSearch] = useState(false);
    const {data = [], isError, isLoading} = useGetBooksQuery();
    const { category } = useParams();

    const allBooks = [...data];

    function filterBooks(bookCategory) {
        let nameOfCategory;
        
        if (bookCategory === 'business') {
            nameOfCategory = 'Бизнес'
        } else if (bookCategory === 'psychology') {
            nameOfCategory = 'Психология'
        } else if (bookCategory === 'parents') {
            nameOfCategory = 'Родителям'
        } else if (bookCategory === 'non-fiction') {
            nameOfCategory = 'Нон-фикшн'
        } else if (bookCategory === 'fiction') {
            nameOfCategory = 'Художественная литература'
        } else if (bookCategory === 'programming') {
            nameOfCategory = 'Программирование'
        } else if (bookCategory === 'hobby') {
            nameOfCategory = 'Хобби'
        } else if (bookCategory === 'design') {
            nameOfCategory = 'Дизайн'
        } else if (bookCategory === 'childish') {
            nameOfCategory = 'Детские'
        } else {
            nameOfCategory = 'Другое'
        }
        
        return (
            (category === undefined) ? allBooks : data.filter((book) => (book.categories[0] === nameOfCategory))
            )
        }
        
    const books1 = filterBooks(category);
    const books2 = filterBooks(category);

    const ratingOff = books1.sort((a, b) => ((a.rating > b.rating) ? 1 : 
    (a.rating < b.rating) ? -1 : 
    (a.rating === b.rating) ? 0 : 1));

    const ratingOn = books2.sort((a, b) => ((a.rating > b.rating) ? -1 : 
    (a.rating < b.rating) ? 1 : 
    (a.rating === b.rating) ? 0 : 1));

    function categoryInTheSearchBar(category) {
        return (
            (category === 'Бизнес') ? 'business' :
            (category === 'Психология') ? 'psychology' :
            (category === 'Родителям') ? 'parents' :
            (category === 'Нон-фикшн') ? 'non-fiction' :
            (category === 'Художественная литература') ? 'fiction' :
            (category === 'Программирование') ? 'programming' :
            (category === 'Хобби') ? 'hobby' :
            (category === 'Дизайн') ? 'design' :
            (category === 'Детские') ? 'childish' :
            'other' 
        );
    }

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
                    <div className="filterButton">
                        <button type='button' onClick={() => (setRating(!isRating))} className={classNames({rating: isRating})}>
                            <img src={filterButton} alt="" />
                        </button>
                    </div>
                </div>
                <div className={classNames('miniSearchWithFilterButton', {searchOpen: isSearchOpen})}>
                    <div className="miniSearch">
                        <button type='button' className={classNames({searchOpen: isSearchOpen})} onClick={() => {toggleSearch(!isSearchOpen)}} data-test-id='button-search-open'>
                            <img src={miniSearch} alt="search" />
                        </button>
                    </div>
                    <div className="miniFilter">
                        <button type='button' onClick={() => (setRating(!isRating))} className={classNames({rating: isRating})}>
                            <img src={miniFilter} alt="filter" />
                        </button>
                    </div>
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
                {((isRating) ? ratingOff : ratingOn).map(icon => (
                    <div key={icon.id} className='bookIcon'>
                        <Link to={`/books/${categoryInTheSearchBar(icon.categories[0])}/${icon.id}`} id={icon.id}>
                    <div className="imageOfBook">
                        <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="book" />
                    </div>
                    {(icon.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                     <Stars count={Math.round(icon.rating)} />
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
                {((isRating) ? ratingOff : ratingOn).map(icon => (
                    <div key={icon.id} className='bookIcon'>
                        <Link to={`/books/${categoryInTheSearchBar(icon.categories[0])}/${icon.id}`} id={icon.id}>
                    <div className="imageOfBook">
                        <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="book" />
                    </div>
                    <div className="all">
                        <div className="nameOfBook">{icon.title}</div>
                    <div className="author">{icon.authors}, {icon.issueYear}</div>
                    <div className="starsWithButton">
                    {(icon.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                     <Stars count={Math.round(icon.rating)} />
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
