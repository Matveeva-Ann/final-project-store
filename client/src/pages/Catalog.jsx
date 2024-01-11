import BreadCrumbs from 'breadCrumbs/breadCrumbs';
import { useTranslation } from 'react-i18next';

export default function Catalog() {
  const { t } = useTranslation();
  const arrLinks = [
    {
      link: '',
      name: t('breadCrumbs.home'),
      separator: '/',
    },
  ];
  const separator = '/';
  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={`${separator} ${t('breadCrumbs.catalog')}`}></BreadCrumbs>
      <p>Каталог товарів</p>
    </>
  );
}
