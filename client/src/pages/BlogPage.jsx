import BreadCrumbs from 'breadCrumbs/breadCrumbs';

export default function BlogPage() {
  const arrLinks = [
    {
      link: '',
      name: 'Головна',
    },
  ];
  return (
    <>
      <BreadCrumbs arrLinks={arrLinks} name={'/ Блог'}></BreadCrumbs>
      <p>Блог</p>
    </>
  );
}
