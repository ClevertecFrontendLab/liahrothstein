import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';

import '../all-books/all-books.css';

export function BurgerBooks(props) {
    const { data: categoriesData } = useGetCategoriesQuery();
    const { data: booksData } = useGetBooksQuery();
    const { category } = useParams();

    const { setBurger, isBurger } = props;

    return (
        <div className="books">
            <button type='button' onClick={() => setBurger(!isBurger)} className={(category === 'all' || category === undefined) ? 'active' : ''}>
                <Link to='/books/all' data-test-id='burger-books'>
                    <div className="allBooks">Все книги</div>
                </Link>
            </button>
            {categoriesData?.map(book => (
                <div key={book.id} className="book">
                    <Link to={`/books/${book.path}`}>
                        <button type='button' className={book.path === category ? 'active' : ''} onClick={() => setBurger(!isBurger)}>
                            <div className="nameOfBook" data-test-id={`burger-${book.path}`}>{book?.name}</div>
                        </button>
                    </Link>
                    <div className="amount" data-test-id={`burger-book-count-for-${book.path}`}>{booksData?.filter((amountBooks) => (amountBooks?.categories.some((amount) => (amount === book?.name)))).length}</div>
                </div>
            ))}
        </div>
    );
};