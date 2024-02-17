import Lottie from 'react-lottie';

import animationData from '../../assets/images/loader.json';

export default function Loader() {
    const defaultOptions = {
        animationData,
        loop: true,
        autoplay: true
    }

    return (
        <div className="loader">
            <Lottie
                options={defaultOptions}
                height={'150px'}
                width={'150px'} />
        </div>
    )
}