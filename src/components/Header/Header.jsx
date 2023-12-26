import LanguageToggle from "./LanguageToggle/LanguageToggle";
import Logo from "./Logo";

export default function Header() {
  return (
    <header>
      <Logo></Logo>
      <div>Categories</div>
      <p>favorite</p>
      <p>basket</p>
      <p>login</p>
      <LanguageToggle></LanguageToggle>
    </header>
  );
}
