import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';
import './all-books.css';

export function AllBooks () {
    const {data: categoriesData} = useGetCategoriesQuery();
    const {data: booksData} = useGetBooksQuery();
    const [activeCategory, setActiveCategory] = useState(0);

    return (
                    <div className="books">
                        <button type='button' onClick={() => setActiveCategory(0)} className={activeCategory === 0 ? 'active' : ''}>
                            <Link to='/books/all'>
                                <div className="allBooks" data-test-id='navigation-books'>Все книги</div>
                            </Link>
                        </button>
                        {categoriesData?.map(book => (
                            <div key={book.id} className="book">
                                <Link to={`/books/all/${book.path}`}>
                                    <button type='button' className={activeCategory === book.id ? 'active' : ''} onClick={() => setActiveCategory(book.id)}>
                                        <div className="nameOfBook">{book?.name}</div>
                                    </button>
                                </Link>
                                <div className="amount">{booksData?.filter((amountBooks) => (amountBooks?.categories[0] === book?.name)).length}</div>
                            </div>
                        ))}
                    </div>
    );
};