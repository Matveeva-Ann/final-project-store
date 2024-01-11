import BreadCrumbs from 'breadCrumbs/breadCrumbs';
import { useTranslation } from 'react-i18next';

export default function Actions() {
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
      <BreadCrumbs arrLinks={arrLinks} name={`${separator} ${t('breadCrumbs.promotions')}`}></BreadCrumbs>
      <p>Акції</p>
    </>
  );
}
