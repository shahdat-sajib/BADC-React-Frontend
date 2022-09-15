import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
import { Pagination, Navigation } from "swiper";
import { Autoplay } from "swiper";
import slider1 from '../Assets/SliderImages/slider1.jpg';
import slider2 from '../Assets/SliderImages/slider2.png';
import slider4 from '../Assets/SliderImages/slider4.jpg';


export default function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}

                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                speed={800}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} /></SwiperSlide>
                <SwiperSlide><img src={slider2} /></SwiperSlide>
                <SwiperSlide><img src={slider4} /></SwiperSlide>

            </Swiper>
        </>
    );
}
