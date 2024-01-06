import Public from "../../img/public.png";
import  {PublicityImg,PublicInfo,PublicInline} from "./Publicity.style"
import { useTranslation } from 'react-i18next';
import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles';
import CommonTextStyles from 'components/common-styles/CommonTextStyles/CommonTextStyles';

function Publicity() {
    const { t } = useTranslation();
    return (
        <PublicInfo>
            <PublicityImg src={Public} loading="lazy" alt="publicity" />
            <PublicInline>
            <ProjectTitles style={{ fontFamily: "Cormorant Garamond",padding:" 70px 0" }}> CROCUS HOME DECOR</ProjectTitles>
        <CommonTextStyles>{t('main.publicity.postOne')}
              </CommonTextStyles>
            <CommonTextStyles>{t('main.publicity.postTwo')}     
           </CommonTextStyles> 
               
            </PublicInline>
        </PublicInfo>
    )
}
export default Publicity