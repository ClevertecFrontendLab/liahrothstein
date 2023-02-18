import { useState } from 'react';
import { useGetCategoriesQuery } from '../../redux';
import './all-books.css';

export function AllBooks () {
    const {data = []} = useGetCategoriesQuery();
    const [activeCategory, setActiveCategory] = useState(0);

    function random (min, max)  {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
                    <div className="books">
                        <button type='button' onClick={() => setActiveCategory(0)} className={activeCategory === 0 ? 'active' : ''}>
                            <div className="allBooks" data-test-id='navigation-books'>Все книги</div>
                        </button>
                        {data.map(book => (
                            <div key={book.id} className="book">
                                    <button type='button' className={activeCategory === book.id ? 'active' : ''} onClick={() => setActiveCategory(book.id)}>
                                <div className="nameOfBook">{book.name}</div>
                                    </button>
                                <div className="amount">{random(1, 60)}</div>
                            </div>
                        ))}
                    </div>
    );
};