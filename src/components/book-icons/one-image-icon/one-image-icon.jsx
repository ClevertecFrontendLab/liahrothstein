import { Link } from "react-router-dom";
import { FourStars } from "../../stars/four-stars";
import image from './image.png';
import './one-image-icon.css';

export function OneImageIcon () {

    return (
                <div className="bookIcon">
                    <Link to='/one-image'>
                    <div className="imageOfBook">
                        <img src={image} alt="book" />
                    </div>
                    <FourStars />
                    <div className="nameOfBook">Грокаем алгоритмы. Иллюстрированное пособие для програ...</div>
                    <div className="author">Адитья Бхаргава, 2019</div>
                        <div className="button">
                            <button type='button'>Забронировать</button>
                        </div>
                    </Link>
                </div>
    );
}