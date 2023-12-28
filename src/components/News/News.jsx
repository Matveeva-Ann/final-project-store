import './News.style'
import {TitleNews} from '../News/News.style'
import Button from 'components/Button/Button'

function News() {
    return (
        <>
            <TitleNews style={{ margin: '0 auto' }}>Новинки</TitleNews>
            <p> тут будуть новинки</p>
            <Button>Переглянути все</Button>
        </>
    )
}
export default News