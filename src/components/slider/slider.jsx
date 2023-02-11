import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Thumbs } from 'swiper';

import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/thumbs";
import './slider.css';

import fullImage1 from './assets/fullImage1.png';
import fullImage2 from './assets/fullImage2.png';
import MiniImage1 from './assets/image1.png';
import MiniImage2 from './assets/image2.png';

export function Slider () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const fullImages = [{id:0, image:fullImage1}, {id:1, image:fullImage2},
                        {id:2, image:fullImage1}, {id:3, image:fullImage2},
                        {id:4, image:fullImage1}, {id:5, image:fullImage2},
                        {id:6, image:fullImage1}, {id:7, image:fullImage2}
    ];
    const miniImages = [{id:0, image:MiniImage1}, {id:1, image:MiniImage2},
                        {id:2, image:MiniImage1}, {id:3, image:MiniImage2},
                        {id:4, image:MiniImage1}, {id:5, image:MiniImage2},
                        {id:6, image:MiniImage1}, {id:7, image:MiniImage2}
    ];

    return (
            <div className="image">
                <Swiper
                data-test-id='slide-big'
                slidesPerView={1}
                modules={[Thumbs, Pagination]}
                pagination={{ clickable: true }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                className='mainSlider mobileSlider'
                >
                    {fullImages.map(({image, id}) => (
                        <SwiperSlide key={id}><img src={image} alt="" /></SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    modules={[Scrollbar, Thumbs]}
                    watchSlidesProgress={true}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                    slidesPerView={5}
                    scrollbar={{ draggable: true }}
                    className='miniSlider'
                    >
                    {miniImages.map(({image, id}) => (
                        <SwiperSlide data-test-id='slide-mini' key={id}><img src={image} alt="" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
}