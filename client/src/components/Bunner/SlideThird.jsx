import { BunnerFlex, ImageSwiper, PostThirdSlide, TitleSlide, TitleThirdSlide } from './Bunner.style';
import swiper2 from '../../img/swiper2.jpg';
import { useTranslation } from 'react-i18next';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';

export default function SlideThird() {
  const { t } = useTranslation();

  return (
    <TitleSlide>
      <TitleThirdSlide>Меблі: ключовий акцент</TitleThirdSlide>
      <BunnerFlex>
        <ImageSwiper src={swiper2} alt="swiper" loading="lazy" />
          <PostThirdSlide>{t('main.slideTree.text')}</PostThirdSlide>
      </BunnerFlex>
      <LinkButton link="/shop">Вибрати стильні меблі </LinkButton>
    </TitleSlide>
  );
}
