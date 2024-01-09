import Public from "../../img/public.png";
import  {PublicityImg,PublicInfo,PublicInline} from "./Publicity.style"
import { useTranslation } from 'react-i18next';
// import ProjectTitles from 'components/common-styles/ProjectTitles/ProjectTitles';
import CommonTextStyles from 'components/common-styles/CommonTextStyles/CommonTextStyles';
import { PublicTitle } from "components/common-styles/ProjectTitles/ProjectTitles.style";

function Publicity() {
    const { t } = useTranslation();
    return (
        <PublicInfo>
            <PublicityImg src={Public} loading="lazy" alt="publicity" />
            <PublicInline>
            <PublicTitle> CROCUS HOME DECOR</PublicTitle>
        <CommonTextStyles>{t('main.publicity.postOne')}
              </CommonTextStyles>
            <CommonTextStyles>{t('main.publicity.postTwo')}     
           </CommonTextStyles>    
            </PublicInline>
        </PublicInfo>
    )
}
export default Publicity