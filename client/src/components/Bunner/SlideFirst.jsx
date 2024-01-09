import { BunnerFlex, BunnerImg, BunnerPost, ButtonWrapper, ColoredElement, Post, Title, TitleTwo, WrapperSlideFirst } from './Bunner.style';
import Bunnerbg from '../../img/bunnerbg.png';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';
import { useTranslation } from 'react-i18next';

export default function SlideFirst() {
  const { t } = useTranslation();

  return (
    <WrapperSlideFirst>
      <Title>CROCUS HOME DECOR</Title>
      <BunnerFlex>
        <BunnerPost>
          <TitleTwo>{t('main.slideFirst.title')}</TitleTwo>
          <ColoredElement></ColoredElement>
          <Post>{t('main.slideFirst.text') }</Post>
          <ButtonWrapper>
            <LinkButton link='/shop'>{t('main.slideFirst.buttonCatalog') }</LinkButton>
            <LinkButton buttonStyle='transparent' link='/actions'>{t('main.slideFirst.buttonSale') }</LinkButton>
          </ButtonWrapper>
        </BunnerPost>
        <BunnerImg src={Bunnerbg} loading="lazy" alt="bunner" />
      </BunnerFlex>
    </WrapperSlideFirst>
  );
}
