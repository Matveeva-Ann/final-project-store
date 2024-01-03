import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import {
  TitleTwo,
  BunnerSection,
  BunnerFlex,
  TitleSlide,
  Post,
} from './Bunner.style.jsx';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PiCaretLeftThin, PiCaretRightThin } from 'react-icons/pi';

// import { Navigation, Pagination, EffectCoverFlow } from 'swiper';
// import SwiperSlide

import swiper1 from '../../img/swiper1.png';
import swiper2 from '../../img/swiper2.jpg';
import SlideFirst from './SlideFirst.jsx';

import { useTranslation } from 'react-i18next';

function Bunner() {
const { t } = useTranslation();

  return (
    <>
      <BunnerSection>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={500}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 9000 }}
          speed={1500}
        >
          <SwiperSlide>
            <SlideFirst></SlideFirst>
          </SwiperSlide>

          <SwiperSlide>
            <TitleSlide>
              <BunnerFlex>
              <img
                src={swiper1}
                alt="swiper"
                loading="lazy"
                style={{ width: 'auto', height: '540px', paddingTop:'50px' }}
              />
                <Post> {t('slideFirst.textSlideTwo')} </Post>
              </BunnerFlex>
              <TitleTwo>{t('slideFirst.title')}</TitleTwo>
            </TitleSlide>
          </SwiperSlide>
          <SwiperSlide>
            <TitleSlide>
              <BunnerFlex>
              <img
                src={swiper2}
                alt="swiper"
                loading="lazy"
                style={{ width: 'auto', height: '540px' }}
              />
                <Post>{t('slideFirst.textSlideTree')}</Post>
              </BunnerFlex>
              <TitleTwo>{t('slideFirst.title')}</TitleTwo>
              
            </TitleSlide>
          </SwiperSlide>
        </Swiper>

        {/* зробила кнопки але не стилізувала їх, поки не знаю як їх стилізувати, бо коли стилізується то Swiper перестає бачити свої класи swiper-button-next  та swiper-button-prev, якщо тут прям через style то працює, але то не зовсім правильно */}
        <button className="swiper-button-next" aria-label="Go to Next Slide" style={{ border: 'none', background: 'transparent', color: 'var(--textColorSecondary)' }}>
          <PiCaretRightThin/>
        </button>
        <button className="swiper-button-prev" aria-label="Go to Previous Slide">
          <PiCaretLeftThin />
        </button>
      </BunnerSection>
    </>
  );
}
export default Bunner;
