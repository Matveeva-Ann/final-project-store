import styled from '@emotion/styled';

export const AboutUsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  @media (width<1025px) {
    flex-direction: column;
  }
`;
export const AboutUsBlock = styled.div`
  display: flex;
  flex-direction: column;
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
    width: 200px;
  }
`;
export const ColoredElementAbout = styled.div`
  position: absolute;
  width: 800px;
  height: 1000px;
  background-color: var(--articleColorBg);

  top: 5px;
  right: 0;
  z-index: -1;
  @media (width<1025px) {
    display: none;
  }
`;
