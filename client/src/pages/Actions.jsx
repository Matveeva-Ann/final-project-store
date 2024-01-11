import BreadCrumbs from 'breadCrumbs/breadCrumbs';

export default function Actions() {
  const arrLinks = [
    {
      link: '',
      name: 'Головна',
    },
  ];
  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={'/ Акції'}></BreadCrumbs>
      <p>Акції</p>
    </>
  );
}
