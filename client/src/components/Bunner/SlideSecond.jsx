import { useTranslation } from 'react-i18next';
import { BunnerImgSecond, Post, PostSecondSlideWrapper, TitleSecondSlide, TitleSlide } from './Bunner.style';

import swiper1 from '../../img/swiper1.png';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';

export default function SlideSecond() {
  const { t } = useTranslation();

  return (
    <TitleSlide>
      <div style={{ position: 'relative' }}>
        <BunnerImgSecond src={swiper1} alt="swiper" loading="lazy" />
        <TitleSecondSlide>{t('main.slideTwo.title')}</TitleSecondSlide>
      </div>
      <PostSecondSlideWrapper>
        <Post> {t('main.slideTwo.text')} </Post>
      </PostSecondSlideWrapper>
      <LinkButton link="/shop">{t('main.slideTwo.btnText')} </LinkButton>
    </TitleSlide>
  );
}
