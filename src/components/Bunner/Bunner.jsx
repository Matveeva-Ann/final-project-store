import React from "react"
import {Title,TitleTwo,Post,BunnerImg ,BunnerSection} from "./Bunner.style.jsx"


    function Bunner() {
        return (
            <>
                <BunnerSection>
                <Title>CROCUS HOME DECOR</Title>
                <TitleTwo>Зробимо твій будинок затишним!</TitleTwo>
                <Post>Наш магазин декору та подарунків пропонує товари провідних світових брендів, які приємно як дарувати так і отримувати. Ми з радістю допоможемо вам обрати, незвичні подарунки на будь-яке свято. Ви можете купити подарунок в нашому магазинів або замовити он-лайн з доставкою по Україні.</Post>
                    <BunnerImg />
                </BunnerSection>
            </>
        )
    
}
export default Bunner