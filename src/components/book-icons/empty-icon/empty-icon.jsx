import { Link } from "react-router-dom";
import { FiveStars } from "../../stars/five-stars";
import notImage from './notImage.png';
import './empty-icon.css';

export function EmptyIcon () {

    return (
                <div className="bookIcon">
                    <Link to='/empty'>
                    <div className="all">
                    <div className="imageOfBook">
                        <img src={notImage} alt="book" />
                    </div>
                    <FiveStars />
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное </div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                    </div>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
    );
}