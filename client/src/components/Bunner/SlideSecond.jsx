import { useTranslation } from 'react-i18next';
import {
  BunnerFlex,
  BunnerImgSecond,
  PostSecondSlide,
  PostSecondSlideWrapper,
  TitleSecondSlide,
  TitleSlide,
} from './Bunner.style';

import swiper1 from '../../img/swiper1.png';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';

export default function SlideSecond() {
  const { t } = useTranslation();

  return (
    <TitleSlide>
      <TitleSecondSlide>{t('main.slideTwo.title')}</TitleSecondSlide>
      <BunnerFlex>
        <BunnerImgSecond src={swiper1} alt="swiper" loading="lazy" />
        <PostSecondSlideWrapper>
          <PostSecondSlide> {t('main.slideTwo.text')} </PostSecondSlide>
          <LinkButton link="/shop">{t('main.slideTwo.btnText')} </LinkButton>
        </PostSecondSlideWrapper>
      </BunnerFlex>
    </TitleSlide>
  );
}
