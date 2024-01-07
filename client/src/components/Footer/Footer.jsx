import { useTranslation } from 'react-i18next';
import 'i18n/i18n.js';

import FooterNavigation from './components/FooterNavigation';
import FooterCategory from './components/FooterCategory';
import FooterContacts from './components/FooterContacts';
import Logo from '../Header/Logo';

import { FooterStyle, FooterWrapper, FooterCopyright } from './Footer.style';
export default function Footer() {

    const { t } = useTranslation();
  return (
    <>
      <FooterStyle>
        <FooterWrapper>
          <Logo size="big" />
          <FooterNavigation />
          <FooterCategory />
          <FooterContacts />
        </FooterWrapper>
        <FooterCopyright>
          <p>2023, Crocus Home Decor</p>
          <p>{t('footer.allRightsReserved')}</p>
        </FooterCopyright>
      </FooterStyle>
    </>
  );
}
