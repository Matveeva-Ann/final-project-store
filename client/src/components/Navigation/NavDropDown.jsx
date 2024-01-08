import { useTranslation } from 'react-i18next';
import { NavDropDownWrapper, NavListDropDown, NuvLinkDropDown } from './Navigation.style';
import { navItems } from './NavItems';

export default function NavDropDown({isOpenDropDown, setIsOpenDropDown}) {
  const { t } = useTranslation();

  return (
    <NavDropDownWrapper isOpenDropDown={isOpenDropDown}>
      <nav>
        <NavListDropDown>
          {navItems.map(item => (
            <li key={item.name}>
              <NuvLinkDropDown to={item.link} onClick={()=>setIsOpenDropDown(false)}>{t(`header.${item.name}`)}</NuvLinkDropDown>
            </li>
          ))}
        </NavListDropDown>
      </nav>
    </NavDropDownWrapper>
  );
}
