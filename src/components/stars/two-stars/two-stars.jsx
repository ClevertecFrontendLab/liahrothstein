import star from './assets/star.png';
import notStar from './assets/notStar.png';

export function TwoStars () {

    return (
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                        <div className="star">
                            <img src={notStar} alt="star" />
                        </div>
                    </div>
    );
};