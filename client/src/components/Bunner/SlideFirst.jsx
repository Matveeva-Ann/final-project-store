import {BunnerFlex, BunnerImg, BunnerPost,ButtonWrapper,ColoredElement,Title, WrapperSlideFirst} from './Bunner.style';
import Bunnerbg from '../../img/bunnerbg.png';
import LinkButton from 'components/Buttons/LinkButton.jsx/LinkButton';
import { useTranslation } from 'react-i18next';
import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles';
import CommonTextStyles from 'components/common-styles/CommonTextStyles/CommonTextStyles';

export default function SlideFirst() {
  const { t } = useTranslation();

  return (
    <WrapperSlideFirst>
      <Title>CROCUS HOME DECOR</Title>
      <BunnerFlex>
        <BunnerPost>
          <ProjectTitles>{t('main.slideFirst.title')}</ProjectTitles>
          <ColoredElement></ColoredElement>
          <CommonTextStyles>{t('main.slideFirst.text') }</CommonTextStyles>
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
