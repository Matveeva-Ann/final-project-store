import { useTranslation } from 'react-i18next';
import {
  BunnerFlex,
  BunnerImgSecond,
  Post,
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
          <Post> {t('main.slideTwo.text')} </Post>
          <LinkButton link="/shop">{t('main.slideTwo.btnText')} </LinkButton>
        </PostSecondSlideWrapper>
      </BunnerFlex>
    </TitleSlide>
  );
}
