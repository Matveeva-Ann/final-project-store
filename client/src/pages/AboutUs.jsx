import { AboutUsWrapper, ImageDecor } from './AboutUs.style';
import { useTranslation } from 'react-i18next';
import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles';
import CommonTextAboutStyles from 'components/common-styles/CommonTextAboutStyles/CommonTextAboutStyles';
import Decor from '../img/decor.jpg';
import BreadCrumbs from 'breadCrumbs/breadCrumbs';
export default function AboutUs() {
  const { t } = useTranslation();
  const arrLinks = [
    {
      link: '',
      name: t('breadCrumbs.home'),
      separator: '/',
    },
  ];
  const separator = '/';

  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={`${separator} ${t('breadCrumbs.aboutUs')}`}></BreadCrumbs>
      <AboutUsWrapper>
        <ProjectTitles>{t('pageAboutUs.post.title')}</ProjectTitles>
        <ImageDecor src={Decor} loading="lazy" alt="decor" />

        <CommonTextAboutStyles>{t('pageAboutUs.post.textOne')}</CommonTextAboutStyles>
        <CommonTextAboutStyles> {t('pageAboutUs.post.textTwo')}</CommonTextAboutStyles>
      </AboutUsWrapper>
    </>
  );
}
