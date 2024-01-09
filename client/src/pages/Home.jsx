import Bunner from 'components/Bunner/Bunner';
import News from 'components/News/News';
import Publicity from 'components/Publicity/Publicity';
import CatalogSection from '../components/CatalogSection/CatalogSection';
import EmailNewsletter from '../components/EmailNewsletter/EmailNewsletter';
import Blog from 'components/Blog/Blog';

export default function Home() {
  return (
    <>
      <Bunner></Bunner>
      <News></News>
      <CatalogSection></CatalogSection>
      <Publicity></Publicity>
      <Blog></Blog>
      <EmailNewsletter />
    </>
  );
}
