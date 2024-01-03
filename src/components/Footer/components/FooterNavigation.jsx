import { useTranslation } from 'react-i18next';
import 'i18n/i18n.js';

import { footerNavItems } from './FooterNavItem'

import {FooterNavList, FooterNavItem, FooterNavLink} from './FooterNavigation.style'


export default function FooterNavigation() {
  const { t } = useTranslation();

  return (
    
      <FooterNavList>
        {footerNavItems.map(item => (
          <FooterNavItem key={item.name}>
            <FooterNavLink to={item.link} >{t(`footer.navigation.${item.name}`)}</FooterNavLink>
          </FooterNavItem>
        ))}
      </FooterNavList>
    
  );
}

