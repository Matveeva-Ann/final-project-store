import './CatalogSection.style'
import { TitleNews } from '../News/News.style'
import {CatalogWrapper,CatalogGrid,CatalogItem,Image,TextOverlayOne, TextOverlayTwo, TextOverlayThree, TextOverlayFour} from './CatalogSection.style'
import Button from 'components/Buttons/Button/Button'
import Basket from '../../img/basket.jpg'
import Vase from '../../img/vase.jpg'
import Textile from '../../img/textile.jpg'
import Forkitchen from '../../img/forkitchen.jpg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
function CatalogSection() {
    const { t } = useTranslation();

    return (
        <CatalogWrapper>
            <TitleNews >{t('catalogSection.titleCatalog')}</TitleNews>
            <CatalogGrid>
                <CatalogItem>
                    <Link to='/'>
                <Image src={Basket} />
                        <TextOverlayOne>Декоративні корзини</TextOverlayOne>
                        </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Vase} />
                        <TextOverlayTwo>Вази та кашпо</TextOverlayTwo>
                    </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Textile} />
                        <TextOverlayThree>Текстиль</TextOverlayThree>
                    </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Forkitchen} />
                        <TextOverlayFour>Все для кухні</TextOverlayFour>
                    </Link>
                </CatalogItem>
            </CatalogGrid>
            <Button>Переглянути все</Button>
        </CatalogWrapper>
    )
}
export default CatalogSection