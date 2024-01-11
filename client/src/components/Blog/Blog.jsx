import ProjectCaptions from 'components/common-styles/ProjectCaptions/ProjectCaptions';
import { useTranslation } from 'react-i18next';
import { BlogItem, BlogWrapper, ImgBlog } from './Blog.style';
import Kitchen from '../../img/kitchen.jpg';
import Living_room from '../../img/living_room.jpg';
import CommonTextStyles from 'components/common-styles/CommonTextStyles/CommonTextStyles';
import { Link } from 'react-router-dom';
function Blog() {
  const { t } = useTranslation();

  return (
    <>
      <ProjectCaptions>{t('main.blog.title')}</ProjectCaptions>
      <BlogWrapper>
        <BlogItem>
          <Link style={{ textDecoration: 'none' }} to="/">
            <ImgBlog src={Kitchen} loading="lazy" alt="kitchen"></ImgBlog>
            <CommonTextStyles>{t('main.blog.postOne')}</CommonTextStyles>
          </Link>
        </BlogItem>
        <BlogItem>
          <Link style={{ textDecoration: 'none' }} to="/">
            <ImgBlog src={Living_room} loading="lazy" alt="room"></ImgBlog>
            <CommonTextStyles>{t('main.blog.postTwo')}</CommonTextStyles>
          </Link>
        </BlogItem>
      </BlogWrapper>
    </>
  );
}
export default Blog;
