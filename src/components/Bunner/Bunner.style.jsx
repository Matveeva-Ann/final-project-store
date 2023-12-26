import styled from "@emotion/styled";

export const BunnerSection=styled.div`
    margin:50px 150px;
    padding:0 120px;
`
export const Title=styled.h1`
    margin:0 auto;
    font-family: 'Cormorant Garamond', serif;
    color: var(--accentColorText) ;
    font-family: "Cormorant Garamond", Sans-serif;
    font-size: 6vw;
    /* font-size:64px; */
    font-style: inherit;
    font-weight: 400;
    line-height: 120px;
    opacity: 0.2;
`
export const TitleTwo=styled.h2`
        color:var(--titleColor);
         /* color: red; */
    font-family: "Montserrat", Sans-serif;
    font-size: 44px;
    font-weight: 500;
    font-style: normal;
    line-height: 60px;
`
export const Post=styled.p`
    color:var(--textColorSecondary);
    font-family: "Montserrat", Sans-serif;
    font-size: 20px;
    line-height: 30px;
`
export const BunnerImg=styled.img`
    position: relative;
    width: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    background-image: url('./icons/bunner.png')center cover no-repeat  ;

`