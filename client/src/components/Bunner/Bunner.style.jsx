import styled from '@emotion/styled';

export const BunnerSection = styled.section`
  margin: 50px auto 150px;
`;

export const BunnerFlex = styled.div`
  display: flex;
  gap: 50px 25px;
  align-items: stretch;
  @media (width < 1025px) {
    flex-direction: column;
    gap: 20px 25px;
  }
`;

export const TitleTwo = styled.h2`
  color: var(--titleColor);
  padding: 0px 0 40px 20px;
  font-family: 'Montserrat', Sans-serif;
  font-size: 44px;
  font-weight: 500;
  font-style: normal;
  line-height: 60px;
  margin: 0;
  @media (width<1200px) {
    font-size: 40px;
    padding: 0px 0 25px 20px;
  }
  @media (width<1025px) {
    display: none;
  }
`;

export const TitleSlide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  background-color: var(--articleColorBg);
  padding: 20px 50px 30px;
  @media (width < 450px) {
    padding: 20px;
  }
`;

export const Post = styled.p`
  color: var(--textColorSecondary);
  font-family: 'Montserrat', Sans-serif;
  font-size: 20px;
  line-height: 30px;
  text-align: start;
  margin-bottom: 40px;
  padding-left: 10px;
  @media (width<1025px) {
    display: none;
  }
`;

//стилі 1 слайду

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
  @media (width < 1025px) {
    font-size: 7.4vw;
    top: -15px;
  }
  @media (width < 450px) {
    top: -25px;
  }
`;
export const WrapperSlideFirst = styled.div`
  padding-top: 50px;
  z-index: 2;
  position: relative;
`;
export const BunnerPost = styled.div`
  padding-right: 30px;
  padding-top: 80px;
  @media (width < 1025px) {
    order: 2;
    padding-right: 0px;
    padding-top: 0px;
  }
`;
export const ColoredElement = styled.div`
  position: absolute;
  width: 850px;
  height: 400px;
  background-color: var(--articleColorBg);
  top: 5px;
  z-index: -1;
  @media (width<1025px) {
    max-width: 100%;
  }
`;
export const BunnerImg = styled.img`
  position: relative;
  /* width: 58%; */
  width: 42vw;
  object-position: 50% 50%;
  object-fit: cover;
  display: grid;
  height: auto;
  @media (width < 1025px) {
    order: 1;
    width: 100%;
    max-height: 480px;
  }
  @media (width < 450px) {
    max-height: 400px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  gap: 35px;
  align-items: stretch;
  @media (width < 1025px) {
    padding-right: 0px;
  }
`;

// стилі 2го слайду

export const PostSecondSlideWrapper = styled.div`
  padding: 15px 10px 10px;
`;

export const BunnerImgSecond = styled.img`
  position: relative;
  width: 100%;
  max-height: 400px;
  padding-top: 50px;
  object-position: 50% 50%;
  object-fit: cover;
  display: grid;
  height: auto;
  margin: 0 auto;
  @media (width < 1500px) {
    max-height: 470px;
  }
  @media (width < 450px) {
    padding-top: 30px;
  }
`;
export const TitleSecondSlide = styled.h2`
  position: absolute;
  text-align: center;
  color: var(--accentColorText);
  font-size: 90px;
  font-family: 'CormorantGaramond';
  font-weight: 300;
  font-style: inherit;
  line-height: 60px;
  margin: 0;
  top: -12px;
  left: 0;
  width: 100%;
  text-shadow: 7px 6px 8px rgb(172 154 154 / 63%);
  @media (width < 1500px) {
    font-size: 7vw;
  }
  @media (width < 1025px) {
    font-size: 6vw;
    top: -15px;
    line-height: 60px;
  }
  @media (width < 450px) {
    line-height: 40px;
  }
`;

// стилі 3го слайду

export const PostThirdSlide = styled.p`
  color: var(--textColorSecondary);
  font-family: 'Montserrat', Sans-serif;
  font-size: 20px;
  line-height: 30px;
  text-align: start;
  margin-bottom: 40px;
  margin-right: -20px;
  padding-left: 10px;
  animation: textAnimation 7s ease-in-out;
  z-index: 1;
  @media (width<1200px) {
    margin-right: -30px;
  }
  @media (width<1025px) {
    display: none;
  }

  @keyframes textAnimation {
  0% {
    opacity: 0;
    transform: scale(0.6);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
`;

export const ImageSwiper = styled.img`
  width: 39vw;
  min-height: 620px;
  max-height: 700px;
  object-position: 0% 50%;
  object-fit: cover;
  margin-bottom: 20px;
  z-index: 2;

  @media (width < 1200px) {
    min-height: 640px;
    object-position: 10% 50%;
  }
  @media (width<1025px) {
    width: 100%;
    min-height: 400px;
    max-height: 450px;
    object-position: 10% 70%;
  }
  @media (width<700px) {
    min-height: 300px;
    max-height: 350px;
  }
  @media (width<560px) {
    min-height: 200px;
    max-height: 250px;
  }
`;
export const TitleThirdSlide = styled.h2`
  color: var(--titleColor);
  padding: 0px 0 40px 20px;
  font-family: 'Montserrat', Sans-serif;
  font-size: 44px;
  font-weight: 500;
  font-style: normal;
  line-height: 60px;
  margin: 0;
  @media (width<1025px) {
    text-align: center;
    padding: 0px;
    margin-bottom: 15px;
    font-size: 40px;
  }
  @media (width<700px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media (width<560px) {
    font-size: 20px;
    line-height: 20px;
  }
`;
