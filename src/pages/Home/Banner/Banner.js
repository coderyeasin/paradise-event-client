import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "./styles.css";
// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  EffectCoverflow,Pagination
} from 'swiper';
// import slide1 from '../../../images/'

// install Swiper modules

SwiperCore.use([Autoplay, EffectCoverflow,Pagination]);


const Banner = () => {
   

    return (
    <>
            <Swiper effect={'coverflow'} grabCursor={true}  centeredSlides={true} slidesPerView={'auto'} autoplay={{
  "delay": 2500,
  "disableOnInteraction": false
}} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true,
        }}
          pagination={true}
          className="mySwiper">
          <SwiperSlide><img style={{height: '400px'}} src="https://i.ibb.co/HTK93t5/slides-11.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/Y86hm3G/slides-18.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/N280BcZ/slides-19.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/3NYsFPw/slides-15.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/tHJD3S5/slides-12.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/5rvYgSC/slides-13.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/71Yqx7W/slides-14.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/RjhLBWv/slides-17.jpg" /></SwiperSlide>
          <SwiperSlide><img  style={{height: '400px'}} src="https://i.ibb.co/rb3R7Dk/event5.jpg" /></SwiperSlide>
  </Swiper>
    </>
    );
};

export default Banner;