import 'i18n/i18n';
import { useTranslation } from 'react-i18next';
import { FlagSpan, Select, Wrapper } from './LanguageToggle.styled';

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  function handleChangeLanguage(e) {
    const newLanguage = e.target.value || 'uk';
    i18n.changeLanguage(newLanguage);
  }

  return (
    <Wrapper>
      <label htmlFor="language-select" aria-label="Select Language"></label>
      <FlagSpan img={i18n.language} arial-label='flag'></FlagSpan>
      <Select id="language-select" onChange={handleChangeLanguage} value={i18n.language || 'uk'}>
        <option value="en">EN</option>
        <option value="uk">UA</option>
      </Select>
    </Wrapper>
  );
}
