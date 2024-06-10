import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import Swiper modules correctly
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const HeroSection = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide>
                    <img className="h-44 lg:h-full" src="../img/hero1.png" alt="Slide 1" />                     
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-44 lg:h-full" src="../img/hero2.png" alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="h-44 lg:h-full" src="../img/hero3.png" alt="Slide 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroSection;
