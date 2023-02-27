import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ErrorMessage } from '../../components/error-message';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Illumination } from '../../components/illumination';
import { Loader } from '../../components/loader';
import { Menu } from '../../components/menu';
import { Stars } from '../../components/stars';
import { useGetBooksQuery } from '../../redux';

import blocksButton from './assets/blocks-button.png';
import emptyImage from './assets/empty-image.png';
import filterButton from './assets/filter-button.png';
import linesButton from './assets/lines-button.png';
import miniCloseSearch from './assets/mini-close-search.png';
import miniFilter from './assets/mini-filter.png';
import miniSearch from './assets/mini-search.png';
import search from './assets/search.png';

import './main-page.css';

export function MainPage() {
    const [isActive, setActive] = useState(true);
    const [isRating, setRating] = useState(false);

    const { data = [], isError, isLoading } = useGetBooksQuery();
    const [isSearchOpen, toggleSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [bookList, setBookList] = useState(data);
    const { category } = useParams();
    const textIllumination = useCallback((string) => <Illumination filter={searchTerm} string={string} />, [searchTerm])

    const allBooks1 = [...bookList];
    const allBooks2 = [...bookList];

    const [breadCrumbs, setBreadCrumbs] = useState(category);

    useEffect(() => (setBreadCrumbs(category)), [category]);

    function filterSearch(searchText, array) {
        if (!searchText) return array;

        return (
            array?.filter(({ title }) => (title.toLowerCase().includes(searchText.toLowerCase())))
        )
    }

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredBooks = filterSearch(searchTerm, data);

            setBookList(filteredBooks);
        }, 300)

        return () => (clearTimeout(debounce));
    }, [searchTerm, data]);

    function filterBooks1(bookCategory) {
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
            (category === 'all' || category === undefined) ? allBooks1 : bookList.filter((book) => (book.categories.some((category) => (category === nameOfCategory))))
        )
    }

    function filterBooks2(bookCategory) {
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
            (category === 'all' || category === undefined) ? allBooks2 : bookList.filter((book) => (book.categories.some((category) => (category === nameOfCategory))))
        )
    }

    const books1 = filterBooks1(category);
    const books2 = filterBooks2(category);

    const ratingOff = books1.sort((a, b) => ((a.rating > b.rating) ? 1 :
        (a.rating < b.rating) ? -1 :
            (a.rating === b.rating) ? 0 : 1));

    const ratingOn = books2.sort((a, b) => ((a.rating > b.rating) ? -1 :
        (a.rating < b.rating) ? 1 :
            (a.rating === b.rating) ? 0 : 1));

    return (
        <section className='main-page'>
            <Loader />
            <ErrorMessage />
            <Header />
            <div className="container">
                <Menu />
                <div className="mainBooks">
                    <div className={classNames('navigationList', { loader: isLoading }, { error: isError })}>
                        <div className={classNames('searchWithFilterButton', { searchOpen: isSearchOpen })}>
                            <div className={classNames('search', { searchOpen: isSearchOpen })}>
                                <input
                                    type="text"
                                    placeholder='Поиск книги или автора…'
                                    value={searchTerm}
                                    onChange={(e) => (setSearchTerm(e.target.value))}
                                    data-test-id='input-search'
                                />
                                <img src={search} alt="search" />
                                <div className={classNames('closeSearch', { searchOpen: isSearchOpen })}>
                                    <button type='button' className={classNames({ searchOpen: isSearchOpen })} onClick={() => { toggleSearch(!isSearchOpen) }} data-test-id='button-search-close'>
                                        <img src={miniCloseSearch} alt="close" />
                                    </button>
                                </div>
                            </div>
                            <div className="filterButton">
                                <button type='button' onClick={() => (setRating(!isRating))} className={classNames({ rating: isRating })} data-test-id='sort-rating-button'>
                                    <img src={filterButton} alt="" />
                                    <span>По рейтингу</span>
                                </button>
                            </div>
                        </div>
                        <div className={classNames('miniSearchWithFilterButton', { searchOpen: isSearchOpen })}>
                            <div className="miniSearch">
                                <button type='button' className={classNames({ searchOpen: isSearchOpen })} onClick={() => { toggleSearch(!isSearchOpen) }} data-test-id='button-search-open'>
                                    <img src={miniSearch} alt="search" />
                                </button>
                            </div>
                            <div className="miniFilter">
                                <button type='button' onClick={() => (setRating(!isRating))} className={classNames({ rating: isRating })}>
                                    <img src={miniFilter} alt="filter" />
                                </button>
                            </div>
                        </div>
                        <div className={classNames('buttonIcons', { searchOpen: isSearchOpen })}>
                            <button type='button' onClick={() => { setActive(true) }}>
                                <div className={classNames('buttonIcon', { blocksActive: (isActive === true) ? 'active' : '' })} data-test-id='button-menu-view-window'>
                                    <img src={blocksButton} alt="" />
                                </div>
                            </button>
                            <button type='button' onClick={() => { setActive(false) }}>
                                <div className={classNames('buttonIcon', { linesActive: (isActive === false) ? 'active' : '' })} data-test-id='button-menu-view-list'>
                                    <img src={linesButton} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={classNames('bookIcons', { loader: isLoading }, { blocksActive: (isActive === true) ? 'active' : '' })}>
                        {(searchTerm === '' && filterBooks1(category).length === 0) ? <div className='noBooks' data-test-id='empty-category'>В этой категории книг ещё нет</div> :
                            (searchTerm !== '' && filterBooks1(category).length === 0) ? <div className='noBooks' data-test-id='search-result-not-found'>По запросу ничего не найдено</div> :
                                ((isRating) ? ratingOff : ratingOn).map(icon => (
                                    <div key={icon.id} className='bookIcon' data-test-id='card'>
                                        <Link to={`/books/${(breadCrumbs === 'all' || breadCrumbs === undefined) ? 'all' : breadCrumbs}/${icon.id}`} id={icon.id} state={{ crumbs: breadCrumbs }}>
                                            <div className="imageOfBook">
                                                <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="bookImage" />
                                            </div>
                                            {(icon.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                                                <Stars count={Math.round(icon.rating)} />
                                            }
                                            <div className="nameOfBook">{textIllumination(icon.title)}</div>
                                            <div className="author">{icon.authors}, {icon.issueYear}</div>
                                            <div className="button">
                                                <button type='button'>Забронировать</button>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                    </div>
                    <div className={classNames('bookIcons', { loader: isLoading }, { linesActive: (isActive === false) ? 'active' : '' })}>
                        {(searchTerm === '' && filterBooks1(category).length === 0) ? <div className='noBooks'>В этой категории книг ещё нет</div> :
                            (searchTerm !== '' && filterBooks1(category).length === 0) ? <div className='noBooks'>По запросу ничего не найдено</div> :
                                ((isRating) ? ratingOff : ratingOn).map(icon => (
                                    <div key={icon.id} className='bookIcon'>
                                        <Link to={`/books/${(breadCrumbs === 'all' || breadCrumbs === undefined) ? 'all' : breadCrumbs}/${icon.id}`} id={icon.id} state={{ crumbs: breadCrumbs }}>
                                            <div className="imageOfBook">
                                                <img src={(typeof icon?.image?.url === 'string') ? `https://strapi.cleverland.by${icon?.image?.url}` : emptyImage} alt="bookImage" />
                                            </div>
                                            <div className="all">
                                                <div className="nameOfBook">{textIllumination(icon.title)}</div>
                                                <div className="author">{icon.authors}, {icon.issueYear}</div>
                                                <div className="starsWithButton">
                                                    {(icon.rating) === null ? <div className='noStars'>ещё нет оценок</div> :
                                                        <Stars count={Math.round(icon.rating)} />
                                                    }
                                                    <div className="button">
                                                        <button type='button'>Забронировать</button>
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
