import './News.style'
import {TitleNews,NewsWrapper} from '../News/News.style'
import Button from 'components/Buttons/Button/Button'
import { useTranslation } from 'react-i18next';

function News() {
    const { t } = useTranslation();
    return (
        <NewsWrapper>
            <TitleNews style={{ margin: '0 auto' }}>{t('main.news.titleNews')}</TitleNews>
            <p> тут будуть новинки</p>
            <Button>Переглянути все</Button>
        </NewsWrapper>
    )
}
export default News