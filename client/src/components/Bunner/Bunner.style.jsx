import styled from '@emotion/styled';

export const BunnerSection = styled.section`
  margin: 50px auto 150px;
  /* @media (width>) {
    
  } */
`;

export const Title = styled.h1`
  position: absolute;
  color: var(--accentColorText);
  font-family: 'CormorantGaramond';
  font-size: 6vw;
  font-style: inherit;
  font-weight: 400;
  line-height: 120px;
  opacity: 0.8;
  margin: 0;
  font-weight: 400;
  top: 0px;
  z-index: 1;
  @media (width < 1025) {
    font-size: 7.4vw;
    top: -15px;
  }
`;

export const BunnerFlex = styled.div`
  display: flex;
  gap:50px 25px;
  align-items: stretch;
  @media (width < 1025px) {
    flex-direction: column;
  }
`;
export const BunnerPost = styled.div`
  padding-right: 40px;
  padding-top: 80px;
  @media (width < 1025px) {
    order: 2;
  }
`;
export const TitleTwo = styled.h2`
  color: var(--titleColor);
  padding: 0px 0 40px;
  font-family: 'Montserrat', Sans-serif;
  font-size: 44px;
  font-weight: 500;
  font-style: normal;
  line-height: 60px;
  margin: 0;
   
`;
export const ColoredElement=styled.div`
   position: absolute;
      width: 850px; 
      height: 400px; 
      background-color: var(--articleColorBg);
      top: 5px;
      z-index:-1;
    
`
export const TitleSlide = styled.div`
display:block;
  margin: 0 auto;
   
`;

export const Post = styled.p`
  color: var(--textColorSecondary);
  font-family: 'Montserrat', Sans-serif;
  font-size: 20px;
  line-height: 30px;
  @media (width<1025px){
    /* display:none; */
    /* якщо приховати в банері текст в цьому діапазоні, то приховується текс той що використовується за спільною назвою компонента в publicity */
  }
`;
export const BunnerImg = styled.img`
  position: relative;
  width: 57%;
  object-position: 50% 50%;
  object-fit: cover;
  display: grid;
  height: auto;
  @media (width < 1025px) {
    order: 1;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  gap: 35px;
  align-items: stretch;
  @media (width < 1025px) {
    flex-direction: column;
  }
`;

export const SwiperNext = styled.div`
  /* border: 2px solid red; */
`;
// export const SwiperPrev=styled.div`
//     border: 2px solid red ;
// `

export const WrapperSlideFirst = styled.div`
  padding-top: 50px;
   z-index:2;
  position:relative;
`
export const ImageSwiper=styled.img`
  display: block;
  width:auto;
  height: 450px;
 padding-top: 50px;
`