import { useTranslation } from 'react-i18next';
import { NavList, NavStyle, NuvItem, NuvLinkStyle } from './Navigation.style';
import { navItems } from './NavItems';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <NavStyle>
      <NavList>
        {navItems.map(item => (
          <NuvItem key={item.name}>
            <NuvLinkStyle to={item.link}>{t(`header.${item.name}`)}</NuvLinkStyle>
          </NuvItem>
        ))}
      </NavList>
    </NavStyle>
  );
}
