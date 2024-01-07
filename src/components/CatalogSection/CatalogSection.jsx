import './CatalogSection.style'
import {CatalogWrapper,CatalogGrid,CatalogItem,Image,TextOverlayOne, TextOverlayTwo, TextOverlayThree, TextOverlayFour} from './CatalogSection.style'
import Button from 'components/Buttons/Button/Button'
import Basket from '../../img/basket.jpg'
import Vase from '../../img/vase.jpg'
import Textile from '../../img/textile.jpg'
import Forkitchen from '../../img/forkitchen.jpg'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ProjectCaptions from 'components/common-styles/ProjectCaptions/ProjectCaptions'
function CatalogSection() {
    const { t } = useTranslation();

    return (
        <CatalogWrapper>
            <ProjectCaptions >{t('main.catalogSection.titleCatalog')}</ProjectCaptions>
            <CatalogGrid>
                <CatalogItem>
                    <Link to='/'>
                <Image src={Basket} />
                        <TextOverlayOne>{t('main.catalogSection.catalog.oneSection')}</TextOverlayOne>
                        </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Vase} />
                        <TextOverlayTwo>{t('main.catalogSection.catalog.twoSection')}</TextOverlayTwo>
                    </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Textile} />
                        <TextOverlayThree>{t('main.catalogSection.catalog.threeSection')}</TextOverlayThree>
                    </Link>
                </CatalogItem>
                <CatalogItem>
                     <Link to='/'>
                <Image src={Forkitchen} />
                        <TextOverlayFour>{t('main.catalogSection.catalog.fourSection')}</TextOverlayFour>
                    </Link>
                </CatalogItem>
            </CatalogGrid>
            <Button>{t('main.news.buttonAll')}</Button>
        </CatalogWrapper>
    )
}
export default CatalogSection