import { useGetCategoriesQuery } from '../../redux';
import './all-books.css';

export function AllBooks () {
    const {data = []} = useGetCategoriesQuery();

    function random (min, max)  {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
                    <div className="books">
                        {data.map(book => (
                            <div key={book.id} className="book">
                                <div className="nameOfBook">{book.name}</div>
                                <div className="amount">{random(1, 60)}</div>
                            </div>
                        ))}
                    </div>
    );
};