import styled from '@emotion/styled';

export const TitleThree=styled.h2`
    color:var(--socialSvgColor);
    font-family: "Montserrat";
    font-size: 34px;
    font-weight: 400;
    line-height: 1;
`
export const TitleFour=styled.h3`
    color: var(--socialSvgColor);
    font-family: "Montserrat", Sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
`
export const PostOl=styled.ol`
     color: var(--socialSvgColor);
      font-family: "Montserrat", Sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;
`
export const BlockFlex=styled.div`
    display:grid;
    grid-template-columns: repeat(4,1fr);
    gap:35px;
    @media (width<1025px) {
        grid-template-columns: repeat(2,1fr);
        gap:20px;
    }
    @media (width<435px) {
        grid-template-columns: repeat(1,1fr);
        gap:10px;
    }
`
export const ImgPost=styled.img`
    max-width:180px;
    align-items:center;
`
export const BlockPost=styled.div`
    display:block;
`