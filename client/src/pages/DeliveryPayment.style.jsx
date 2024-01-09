import styled from '@emotion/styled';

export const TitleThree = styled.h2`
  color: var(--socialSvgColor);
  font-family: 'Montserrat';
  font-size: 34px;
  font-weight: 400;
  line-height: 1;
`;
export const TitleFour = styled.h3`
  color: var(--socialSvgColor);
  font-family: 'Montserrat', Sans-serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;
export const PostOl = styled.ol`
  color: var(--socialSvgColor);
  font-family: 'Montserrat', Sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
`;
export const BlockFlex = styled.div`
  display: grid;
  justify-content: space-around;

  grid-template-columns: 185px 185px 185px 185px;
  gap: 10px;
  @media (width<1025px) {
    grid-template-columns: repeat(2, 170px);
    gap: 15px;
  }
  @media (width<435px) {
    grid-template-columns: repeat(1, 200px);
    gap: 10px;
  }
`;
export const ImgPost = styled.img`
  max-width: 185px;
  height: auto;
  align-items: center;
`;
export const BlockPost = styled.div`
  text-align: center;
`;
