import './News.style'
import {TitleNews,NewsWrapper} from '../News/News.style'
import Button from 'components/Buttons/Button/Button'

function News() {
    return (
        <NewsWrapper>
            <TitleNews style={{ margin: '0 auto' }}>Новинки</TitleNews>
            <p> тут будуть новинки</p>
            <Button>Переглянути все</Button>
        </NewsWrapper>
    )
}
export default News