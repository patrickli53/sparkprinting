import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Canadian Undergraduate Technology Conference (CUTC)</SwiperSlide>
        <SwiperSlide>Morphace at Next Canada Venture Reveal</SwiperSlide>
        <SwiperSlide>DeltaHacks at McMaster University</SwiperSlide>
      </Swiper>
    </>
  );
}
