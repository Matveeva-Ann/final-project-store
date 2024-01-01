import { BunnerFlex, BunnerImg, BunnerPost, ButtonWrapper, Post, Title, TitleTwo, WrapperSlideFirst } from './Bunner.style';
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
          <TitleTwo>{t('slideFirst.title')}</TitleTwo>
          <Post>
            Наш магазин декору та подарунків пропонує товари провідних світових брендів, які приємно як дарувати так і
            отримувати. Ми з радістю допоможемо вам обрати, незвичні подарунки на будь-яке свято. Ви можете купити
            подарунок в нашому магазинів або замовити он-лайн з доставкою по Україні.
          </Post>
          <ButtonWrapper>
            <LinkButton link='/shop'> Каталог</LinkButton>
            <LinkButton buttonStyle='transparent' link='/actions'>Акції</LinkButton>
          </ButtonWrapper>
        </BunnerPost>
        <BunnerImg src={Bunnerbg} loading="lazy" alt="bunner" />
      </BunnerFlex>
    </WrapperSlideFirst>
  );
}
