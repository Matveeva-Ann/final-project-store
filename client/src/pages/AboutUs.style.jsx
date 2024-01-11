import styled from '@emotion/styled';

export const AboutUsWrapper = styled.div`
  display: block;
  align-items: center;
  text-align: center;
`;
export const ImageAboutUs = styled.img`
  max-height: 350px;
  height: auto;
  padding: 10px;
  z-index: 1;
  position: relative;
  @media (width<1025px) {
    display: none;
  }
`;
export const ImageDecor = styled.img`
  width: 100%;
  height: auto;
`;
