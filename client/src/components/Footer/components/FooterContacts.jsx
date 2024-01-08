import { useTranslation } from 'react-i18next';
import 'i18n/i18n.js';

import {
    FooterContact, 
    ContactLink, 
    FaFacebookStyle,
    FaInstagramStyle
} from '../Footer.style';
export default function FooterContacts() {
    const { t } = useTranslation();
  return (
    <FooterContact>
      <li><b>{t('footer.contacts.workHours')}</b></li>
      <li>{t('footer.contacts.timeRanges')}</li>
      <li><b>{t('footer.contacts.address')}</b></li>
      <li>
        <ContactLink href="https://maps.app.goo.gl/wgPHuMY85GmpTWmw7?g_st=it">{t('footer.contacts.addressLink')}</ContactLink>
      </li>
      <li><b>{t('footer.contacts.phone')}</b></li>
      <li>
        <ContactLink href="tel:+380677552844">+380 67 755 2844</ContactLink>
      </li>
      <li><b>{t('footer.contacts.socialMedia')}</b></li>
      <div>
        <a href="https://www.facebook.com/people/Crocus-Home-Decor/100074537329420/" target="_blank" aria-label="Facebook" rel="noopener noreferrer"><FaFacebookStyle/></a>
        <a href="https://www.instagram.com/crocus.home.decor/" target="_blank" aria-label="Instagram" rel="noopener noreferrer"><FaInstagramStyle/></a>
      </div>
    </FooterContact>
  );
}
