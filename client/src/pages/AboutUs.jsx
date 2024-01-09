import { AboutUsWrapper, ImageAboutUs, AboutUsBlock, ColoredElementAbout } from './AboutUs.style';
import Public from '../img/public.png';
import Swiper1 from '../img/swiper1.png';
import { useTranslation } from 'react-i18next';
import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles';
import CommonTextAboutStyles from 'components/common-styles/CommonTextAboutStyles/CommonTextAboutStyles';

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
      <ProjectTitles>{t('pageAboutUs.post.title')}</ProjectTitles>
      <AboutUsWrapper>
        <AboutUsBlock>
          <CommonTextAboutStyles>{t('pageAboutUs.post.textOne')}</CommonTextAboutStyles>
          <CommonTextAboutStyles> {t('pageAboutUs.post.textTwo')}</CommonTextAboutStyles>
          <ImageAboutUs src={Swiper1} loading="lazy" alt="aboutUs" />
        </AboutUsBlock>
        <ColoredElementAbout />
        <ImageAboutUs src={Public} loading="lazy" alt="magazine" />
      </AboutUsWrapper>
    </>
  );
}
