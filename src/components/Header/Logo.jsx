import logo from 'img/CROCUS-2.png';
import { LinkStyle, LogoImg } from './Header.style';

export default function Logo() {
  return (
    <LinkStyle to="/" aria-label="Crocus home decor">
      <LogoImg src={logo} alt="Crocus home decor" loading="lazy"/>
    </LinkStyle>
  );
}
