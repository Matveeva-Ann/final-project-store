import BreadCrumbs from 'breadCrumbs/breadCrumbs';

export default function Catalog() {
  const arrLinks = [
    {
      link: '',
      name: 'Головна',
    },
  ];
  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={'/ Каталог'}></BreadCrumbs>
      <p>Каталог товарів</p>
    </>
  );
}
