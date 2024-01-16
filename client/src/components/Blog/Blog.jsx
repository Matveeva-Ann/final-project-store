import ProjectCaptions from 'components/common-styles/ProjectCaptions/ProjectCaptions';
import { useTranslation } from 'react-i18next';
import { BlogItem, BlogWrapper, ImgBlog } from './Blog.style';
import Kitchen from '../../img/kitchen.jpg';
import Living_room from '../../img/living_room.jpg';
import { Link } from 'react-router-dom';
import BlogTitle from 'components/common-styles/BlogTitle/BlogTitle';
function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <ProjectCaptions>{t('main.blog.title')}</ProjectCaptions>
      <BlogWrapper>
        <BlogItem>
          <Link style={{ textDecoration: 'none' }} to="/">
            <ImgBlog src={Kitchen} loading="lazy" alt="kitchen"></ImgBlog>
            <BlogTitle date={'25.07.23'}>{t('main.blog.postOne')}</BlogTitle>
          </Link>
        </BlogItem>
        <BlogItem>
          <Link style={{ textDecoration: 'none' }} to="/">
            <ImgBlog src={Living_room} loading="lazy" alt="room"></ImgBlog>
            <BlogTitle date={'08.01.24'}>{t('main.blog.postTwo')}</BlogTitle>
          </Link>
        </BlogItem>
      </BlogWrapper>
    </>
  );
}
export default Blog;
