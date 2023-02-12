import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Thumbs } from 'swiper';

import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/thumbs";
import './slider.css';

import { useGetIdBookQuery } from '../../redux';

export function Slider () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {data} = useGetIdBookQuery();

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
                    {data?.images?.map((image) => (
                        <SwiperSlide key={data.id}><img src={`https://strapi.cleverland.by${image?.url}`} alt="img of book" /></SwiperSlide>
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
                    {data?.images?.map((image) => (
                        <SwiperSlide data-test-id='slide-mini' key={data.id}><img src={`https://strapi.cleverland.by${image?.url}`} alt="img of book" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
}