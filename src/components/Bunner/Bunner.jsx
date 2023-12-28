import React from "react"
import {Title,TitleTwo,Post,BunnerImg ,BunnerSection,BunnerFlex,BunnerPost, SwiperPrev, SwiperNext} from "./Bunner.style.jsx"
import Button from "components/Button/Button.jsx"
import Bunnerbg from "../../icons/bunnerbg.png"
import 'swiper/css';
import 'swiper/css/effect-coverflow'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import {Swiper,SwiperSlide} from 'swiper/react';
// import { Navigation, Pagination, EffectCoverFlow } from 'swiper';
// import SwiperSlide

import swiper1 from "../../icons/swiper1.png" 
import swiper2 from "../../icons/swiper2.jpg" 
// import swiper3 from "../../icons/swiper3.webp" 

function Bunner() {
    // const swiper = new Swiper();
        return (
            <>
             
                <BunnerSection>
                   <Swiper
                        effect={'slide'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        // autoplay={{ delay: 5000 }} // чомусь авто не працює
                        slidesPerView={1}
                        navigation={{
                            // nextEl: `.${SwiperNext.styledComponentId}`,
                            // prevEl: `.${SwiperPrev.styledComponentId}`,
                            clickable:true
                        }}
                        pagination={{ clickable: true }}> 
                        <SwiperSlide> 
                            <>
                    <Title>CROCUS HOME DECOR</Title>
                    <BunnerFlex>
                    <BunnerPost>
                    <TitleTwo>Зробимо твій будинок затишним!</TitleTwo>
                    <Post>Наш магазин декору та подарунків пропонує товари провідних світових брендів, які приємно як дарувати так і отримувати. Ми з радістю допоможемо вам обрати, незвичні подарунки на будь-яке свято. Ви можете купити подарунок в нашому магазинів або замовити он-лайн з доставкою по Україні.</Post>
                    <Button> Каталог</Button>
                    <Button>Акції</Button>
                    </BunnerPost>
                    <BunnerImg src={Bunnerbg} loading="lazy" alt="bunner" />
                                </BunnerFlex>
                            </>
                    </SwiperSlide>
                        <SwiperSlide>
                                <BunnerFlex>
                                <img src={swiper1} alt="swiper" loading="lazy" style={{ width: 'auto', height: '540px', paddingRight:'10px'}} />
                                <TitleTwo>Зробимо твій будинок затишним!</TitleTwo>
                               
                               </BunnerFlex>
                     </SwiperSlide>
                        <SwiperSlide>
                            <BunnerFlex>
                                <img src={swiper2} alt="swiper" loading="lazy" style={{ width: 'auto', height: '540px', paddingRight:'10px' }} />
                                <TitleTwo>Зробимо твій будинок затишним!</TitleTwo>

                            </BunnerFlex>
                       </SwiperSlide>
                        
                        
                    </Swiper>
                </BunnerSection>
            </>
            
        )
    
}
export default Bunner