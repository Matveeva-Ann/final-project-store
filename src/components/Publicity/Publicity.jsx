import { Post, TitleTwo} from '../Bunner/Bunner.style'
import Public from "../../img/public.png";
import  {PublicityImg,PublicInfo,PublicInline} from "./Publicity.style"

function Publicity() {
    return (
        <PublicInfo>
            <PublicityImg src={Public} loading="lazy" alt="publicity" />
            <PublicInline>
            <TitleTwo style={{ fontFamily: "Cormorant Garamond",padding:" 70px 0" }}> CROCUS HOME DECOR</TitleTwo>
        <Post>
            Деякі речі не знайти так просто у супермаркетах. Іноді у пріоритеті бувають товари, які потрібно шукати лише в асортименті спеціальних магазинів. Це може бути декор для вашого будинку, різні прикраси або подарунки ‒ такі речі зазвичай шукають окремо.  </Post>
            <Post>       
            У Crocus Decor ми розуміємо, що Ваш дім – це вираз Вашої особистості, і саме тому пропонуємо широкий вибір стилів та варіантів декору та подарунків. Незалежно від того, чи Ви впевнені в своєму стилі, чи шукаєте натхнення, ми готові допомогти Вам створити атмосферу, яка відповідає уявленням про ідеальний дім.</Post> 
               
            </PublicInline>
        </PublicInfo>
    )
}
export default Publicity