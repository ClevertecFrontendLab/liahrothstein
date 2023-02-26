import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';

import './all-books.css';

export function AllBooks() {
    const { data: categoriesData } = useGetCategoriesQuery();
    const { data: booksData } = useGetBooksQuery();
    const [activeCategory, setActiveCategory] = useState(undefined);
    const { category } = useParams();

    return (
        <div className="books">
            <button type='button' onClick={() => setActiveCategory(undefined)} className={(category === 'all' || category === undefined) ? 'active' : ''}>
                <Link to='/books/all' data-test-id='navigation-books'>
                    <div className="allBooks">Все книги</div>
                </Link>
            </button>
            {categoriesData?.map(book => (
                <div key={book.id} className="book">
                    <Link to={`/books/${book.path}`}>
                        <button type='button' className={book.path === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
                            <div className="nameOfBook" data-test-id={`navigation-${book.path}`}>{book?.name}</div>
                        </button>
                    </Link>
                    <div className="amount" data-test-id={`navigation-book-count-for-${book.path}`}>{booksData?.filter((amountBooks) => (amountBooks?.categories.some((amount) => (amount === book?.name)))).length}</div>
                </div>
            ))}
        </div>
    );
};