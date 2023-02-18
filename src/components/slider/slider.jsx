import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination, Thumbs } from 'swiper';
import { useParams } from 'react-router-dom';

import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import "swiper/css/thumbs";
import './slider.css';

import { useGetIdBookQuery } from '../../redux';

import emptyImage from './assets/empty-image.png';

export function Slider () {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { id } = useParams();
    const {data} = useGetIdBookQuery(id);
    
    const check = (data?.images === null) ? true : false;

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
                    {check ? <img src={emptyImage} alt="img of book" /> : data?.images?.map((image) => (
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
                        <SwiperSlide data-test-id='slide-mini' key={data.id}><img src={image ? `https://strapi.cleverland.by${image?.url}` : emptyImage} alt="img of book" /></SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
}