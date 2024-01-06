import { TitleTwo } from 'components/Bunner/Bunner.style';
import { useTranslation } from 'react-i18next';
import { BlockFlex, BlockPost, ImgPost, PostOl, TitleFour, TitleThree } from './DeliveryPayment.style';
import { PostAbout } from './AboutUs.style';
import Nova_poshta from '../img/nova_poshta.png';
import Ukr_poshta from '../img/ukr_poshta.png';
import Meest from '../img/meest.png'
import Crocus from '../img/CROCUS-2.png'
import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles.jsx';
export default function DeliveryPayment() {
  const { t } = useTranslation();
  // {t('main.slideTree.text')}
  return (
    <>
      <TitleTwo>{t('pageDeliveryPayment.post.title')} </TitleTwo>
      <ProjectTitles>{t('pageDeliveryPayment.post.titleAbout')}</ProjectTitles>
      <PostAbout>{t('pageDeliveryPayment.post.postAbout')}</PostAbout>
      
      <TitleThree>{t('pageDeliveryPayment.post.titlePay')}</TitleThree>
      <TitleFour>{t('pageDeliveryPayment.post.titlePostTwo')}</TitleFour>
      <PostAbout>{t('pageDeliveryPayment.post.postPay')}
        <BlockFlex>
          <BlockPost>
            <ImgPost src={Crocus} loading="lazy"/>
           {t('pageDeliveryPayment.post.blockPost.post1')}
          </BlockPost>
          <BlockPost>
            <ImgPost src={Nova_poshta} loading="lazy" />
          {t('pageDeliveryPayment.post.blockPost.post2')}
          </BlockPost>
          <BlockPost>
            <ImgPost src={Ukr_poshta} loading="lazy" />
             {t('pageDeliveryPayment.post.blockPost.post3')}
          </BlockPost>
          <BlockPost>
            <ImgPost src={Meest} loading="lazy" />
              {t('pageDeliveryPayment.post.blockPost.post3')}
          </BlockPost>
       </BlockFlex>
        <ul>
          <li>{t('pageDeliveryPayment.post.list.li1')}</li>
          <li>{t('pageDeliveryPayment.post.list.li2')}</li>
          <li>{t('pageDeliveryPayment.post.list.li3')}</li>
        </ul>
      </PostAbout>
      <TitleFour>{t('pageDeliveryPayment.post.titleReceipt')}</TitleFour>
      <PostOl>
        <PostAbout>{t('pageDeliveryPayment.post.postReceipt')}</PostAbout>
        <li>{t('pageDeliveryPayment.post.payList.li1')}</li>
        <li>{t('pageDeliveryPayment.post.payList.li2')}</li>
        <li>{t('pageDeliveryPayment.post.payList.li3')}</li>
      <li>{t('pageDeliveryPayment.post.payList.li4')}</li>
      </PostOl>
</>
  )
}