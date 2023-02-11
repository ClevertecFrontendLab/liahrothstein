import star from './assets/star.png';

export function FiveStars () {

    return (
                    <div className="stars">
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                        <div className="star">
                            <img src={star} alt="star" />
                        </div>
                    </div>
    );
};