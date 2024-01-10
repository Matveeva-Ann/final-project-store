import { useTranslation } from 'react-i18next';
import 'i18n/i18n.js';

import GoogleMaps from '../components/GoogleMaps/GoogleMaps';

import FooterContacts from 'components/Footer/components/FooterContacts';
import { FindUsStyle, FindUsWrapper } from './FindUs.style';
import {TitleTwo} from 'components/common-styles/ProjectTitles/ProjectTitles.style';


export default function FindUs() {

  const { t } = useTranslation();
  return (
    <FindUsStyle>
      <TitleTwo>{t('main.findUs.title')}</TitleTwo>
      <FindUsWrapper>
        <FooterContacts />
        <GoogleMaps />
      </FindUsWrapper>
    </FindUsStyle>
  );
}
