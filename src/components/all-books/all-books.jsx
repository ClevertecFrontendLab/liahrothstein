import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';
import './all-books.css';

export function AllBooks () {
    const {data: categoriesData} = useGetCategoriesQuery();
    const {data: booksData} = useGetBooksQuery();
    const [activeCategory, setActiveCategory] = useState(undefined);
    const { category } = useParams();

    return (
                    <div className="books">
                        <button type='button' onClick={() => setActiveCategory(undefined)} className={category === undefined ? 'active' : ''}>
                            <Link to='/books/all'>
                                <div className="allBooks" data-test-id='navigation-books'>Все книги</div>
                            </Link>
                        </button>
                        {categoriesData?.map(book => (
                            <div key={book.id} className="book">
                                <Link to={`/books/all/${book.path}`}>
                                    <button type='button' className={book.path === category ? 'active' : ''} onClick={() => setActiveCategory(category)}>
                                        <div className="nameOfBook">{book?.name}</div>
                                    </button>
                                </Link>
                                <div className="amount">{booksData?.filter((amountBooks) => (amountBooks?.categories.some((amount) => (amount === book?.name)))).length}</div>
                            </div>
                        ))}
                    </div>
    );
};