import { Post, TitleTwo} from '../Bunner/Bunner.style'
import Public from "../../img/public.png";
import  {PublicityImg,PublicInfo,PublicInline} from "./Publicity.style"
import { useTranslation } from 'react-i18next';

function Publicity() {
    const { t } = useTranslation();
    return (
        <PublicInfo>
            <PublicityImg src={Public} loading="lazy" alt="publicity" />
            <PublicInline>
            <TitleTwo style={{ fontFamily: "Cormorant Garamond",padding:" 70px 0" }}> CROCUS HOME DECOR</TitleTwo>
        <Post>{t('main.publicity.postOne')}
              </Post>
            <Post>{t('main.publicity.postTwo')}     
           </Post> 
               
            </PublicInline>
        </PublicInfo>
    )
}
export default Publicity