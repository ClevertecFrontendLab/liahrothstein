import star from './assets/star.png';
import notStar from './assets/notStar.png';

export function Stars(props) {
    const array = [];

        for (let i = 0; i < props.count; i++) {
                 array.push(<div key={i + 15} className="star">
                                <img src={star} alt="star" />
                            </div>)
        };
        for (let i = 0; i < (5 - props.count); i++) {
                 array.push(<div key={i + 10} className="star">
                                <img src={notStar} alt="star" />
                            </div>)
        };
        
        return <div className="stars">{array}</div>;
}