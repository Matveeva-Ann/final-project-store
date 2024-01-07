import './News.style'
import { NewsWrapper} from '../News/News.style'
import Button from 'components/Buttons/Button/Button'
import { useTranslation } from 'react-i18next';
import ProjectCaptions from 'components/common-styles/ProjectCaptions/ProjectCaptions';

function News() {
    const { t } = useTranslation();
    return (
        <NewsWrapper>
            <ProjectCaptions style={{ margin: '0 auto' }}>{t('main.news.titleNews')}</ProjectCaptions>
            <p> тут будуть новинки</p>
            <Button>{t('main.news.buttonAll') }</Button>
        </NewsWrapper>
    )
}
export default News