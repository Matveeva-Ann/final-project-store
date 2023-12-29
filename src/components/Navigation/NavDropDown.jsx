import { useTranslation } from 'react-i18next';
import { NavDropDownStyle, NavDropDownWrapper, NavListDropDown, NuvItem, NuvItemDropDown, NuvLinkDropDown, NuvLinkStyle } from './Navigation.style';
import { navItems } from './NavItems';

export default function NavDropDown({isOpenDropDown, setIsOpenDropDown}) {
  const { t } = useTranslation();

  return (
    <NavDropDownWrapper isOpenDropDown={isOpenDropDown}>
      <NavDropDownStyle>
        <NavListDropDown>
          {navItems.map(item => (
            <NuvItemDropDown key={item.name}>
              <NuvLinkDropDown to={item.link} onClick={()=>setIsOpenDropDown(false)}>{t(`header.${item.name}`)}</NuvLinkDropDown>
            </NuvItemDropDown>
          ))}
        </NavListDropDown>
      </NavDropDownStyle>
    </NavDropDownWrapper>
  );
}
