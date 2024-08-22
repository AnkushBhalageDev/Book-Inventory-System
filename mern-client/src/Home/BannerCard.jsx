import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css'
import book1 from '../assets/banner-books/book1.png'
import book2 from '../assets/banner-books/book2.png'
import book3 from '../assets/banner-books/book3.png'
import book4 from '../assets/banner-books/book4.png'
import book5 from '../assets/banner-books/book5.png'

// import required modules
import { EffectCards } from 'swiper/modules';
const BannerCard = () => {
    return (
        <div className='banner'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={book1}/>
                </SwiperSlide>
                <SwiperSlide><img src={book2}/></SwiperSlide>
                <SwiperSlide><img src={book3}/></SwiperSlide>
                <SwiperSlide><img src={book4}/></SwiperSlide>
                <SwiperSlide><img src={book5}/></SwiperSlide>
                
            </Swiper> </div>
    )
}

export default BannerCard