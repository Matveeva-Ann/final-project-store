import React from "react"
import {Title,TitleTwo,Post,BunnerImg ,BunnerSection,BunnerFlex,BunnerPost} from "./Bunner.style.jsx"
import Button from "components/Button/Button.jsx"
import Bunnerbg from "../../icons/bunnerbg.png"


    function Bunner() {
        return (
            <>
                <BunnerSection>
                    <Title>CROCUS HOME DECOR</Title>
                    <BunnerFlex>
                    <BunnerPost>
                    <TitleTwo>Зробимо твій будинок затишним!</TitleTwo>
                    <Post>Наш магазин декору та подарунків пропонує товари провідних світових брендів, які приємно як дарувати так і отримувати. Ми з радістю допоможемо вам обрати, незвичні подарунки на будь-яке свято. Ви можете купити подарунок в нашому магазинів або замовити он-лайн з доставкою по Україні.</Post>
                    <Button> Каталог</Button>
                    <Button>Акції</Button>
                    </BunnerPost>
                    <BunnerImg src={Bunnerbg} alt="bunner" />
                    </BunnerFlex>
                </BunnerSection>
                
            </>
        )
    
}
export default Bunner