import { Link } from "react-router-dom";
import { FourStars } from "../../stars/four-stars";
import image from './image.png';
import './book-icon.css'

export function BookIcon () {

    return (
                <div className="bookIcon">
                    <Link to='/book'>
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <FourStars />
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                        <div className="button">
                            <button type='button' data-test-id='card'>Забронировать</button>
                        </div>
                    </Link>
                </div>
    );
}