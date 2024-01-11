import { useTranslation } from 'react-i18next';
import 'i18n/i18n.js';

import GoogleMaps from '../components/GoogleMaps/GoogleMaps';

import FooterContacts from 'components/Footer/components/FooterContacts';
import { FindUsStyle, FindUsTitle, FindUsWrapper } from './FindUs.style';
import BreadCrumbs from 'breadCrumbs/breadCrumbs';

export default function FindUs() {
  const { t } = useTranslation();
  const arrLinks = [
    {
      link: '',
      name: 'Головна',
    },
  ];
  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={'/ Де нас знайти'}></BreadCrumbs>
      <FindUsStyle>
        <FindUsTitle>{t('main.findUs.title')}</FindUsTitle>
        <FindUsWrapper>
          <FooterContacts />
          <GoogleMaps />
        </FindUsWrapper>
      </FindUsStyle>
    </>
  );
}
