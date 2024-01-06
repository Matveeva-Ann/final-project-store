
import {  TitleTwo } from "components/Bunner/Bunner.style";
import { AboutUsWrapper, ImageAboutUs,AboutUsBlock,ColoredElementAbout,PostAbout} from "./AboutUs.style";
import Public from "../img/public.png";
import Swiper1 from "../img/swiper1.png";
import { useTranslation } from 'react-i18next';


export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <>
    <TitleTwo>{t('pageAboutUs.post.title')}</TitleTwo>
    <AboutUsWrapper>
        <AboutUsBlock>
          <PostAbout>{t('pageAboutUs.post.textOne')}</PostAbout> 
          <PostAbout > {t('pageAboutUs.post.textTwo')}</PostAbout> 
          <ImageAboutUs src={Swiper1} loading="lazy" alt="aboutUs" />
      </AboutUsBlock>
      <ColoredElementAbout/>
      <ImageAboutUs src={Public} loading="lazy" alt="magazine"/>
      </AboutUsWrapper>
    </>
  )
}