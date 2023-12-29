import './CatalogSection.style'
import { TitleNews } from '../News/News.style'
import {CatalogWrapper,CatalogGrid,CatalogItem,Image,TextOverlayOne, TextOverlayTwo, TextOverlayThree, TextOverlayFour} from './CatalogSection.style'
import Button from 'components/Button/Button'
import Basket from '../../img/basket.jpg'
import Vase from '../../img/vase.jpg'
import Textile from '../../img/textile.jpg'
import Forkitchen from '../../img/forkitchen.jpg'
function CatalogSection() {
    return (
        <CatalogWrapper>
            <TitleNews >Каталог</TitleNews>
            <CatalogGrid>
                <CatalogItem>
                <Image src={Basket} />
                    <TextOverlayOne>Декоративні корзини</TextOverlayOne>
                </CatalogItem>
                <CatalogItem>
                <Image src={Vase} />
                    <TextOverlayTwo>Вази та кашпо</TextOverlayTwo>
                </CatalogItem>
                <CatalogItem>
                <Image src={Textile} />
                    <TextOverlayThree>Текстиль</TextOverlayThree>
                </CatalogItem>
                <CatalogItem>
                <Image src={Forkitchen} />
                    <TextOverlayFour>Все для кухні</TextOverlayFour>
                </CatalogItem>
            </CatalogGrid>
            <Button>Переглянути все</Button>
        </CatalogWrapper>
    )
}
export default CatalogSection