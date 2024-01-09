import { BunnerFlex, ImageSwiper, PostThirdSlide, TitleSlide, TitleThirdSlide } from './Bunner.style';
import swiper2 from '../../img/swiper2.jpg';
import { useTranslation } from 'react-i18next';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';

export default function SlideThird() {
  const { t } = useTranslation();

  return (
    <TitleSlide>
      <TitleThirdSlide>{t('main.slideTree.title')}</TitleThirdSlide>
      <BunnerFlex>
        <ImageSwiper src={swiper2} alt="swiper" loading="lazy" />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <PostThirdSlide>{t('main.slideTree.text')}</PostThirdSlide>
          <LinkButton link="/shop">{t('main.slideTree.btnText')}</LinkButton>
        </div>
      </BunnerFlex>
    </TitleSlide>
  );
}
