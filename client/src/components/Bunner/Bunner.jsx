import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { BunnerSection } from './Bunner.style.jsx';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';

import './styles.css';
import SlideFirst from './SlideFirst.jsx';
import SlideSecond from './SlideSecond.jsx';
import SlideThird from './SlideThird.jsx';

function Bunner() {
  return (
    <>
      <BunnerSection>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={100}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 7000 }}
          speed={1500}
        >
          <SwiperSlide>
            <SlideFirst></SlideFirst>
          </SwiperSlide>
          <SwiperSlide>
            <SlideSecond></SlideSecond>
          </SwiperSlide>
          <SwiperSlide>
            <SlideThird></SlideThird>
          </SwiperSlide>
        </Swiper>

        <button className="swiper-button-next" aria-label="Go to Next Slide">
          <PiCaretRightThin/>
        </button>
        <button className="swiper-button-prev" aria-label="Go to Previous Slide">
          <PiCaretLeftThin/>
        </button>
      </BunnerSection>
    </>
  );
}
export default Bunner;
