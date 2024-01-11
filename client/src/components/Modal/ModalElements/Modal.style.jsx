import styled from '@emotion/styled';
import { RxCross1 } from 'react-icons/rx';

export const ModalBg = styled.div`
  background-color: #00000082;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
`;
export const ModalBody = styled.div`
  position: relative;
  padding: 35px 50px 50px;
  background-color: #e4d9c3e0;
  backdrop-filter: blur(25px);
  position: relative;
  animation: modal 250ms linear;
  margin: 10px;
  @media (width < 500px) {
    padding: 25px;
  }
  @keyframes modal {
    0% {
      transform: translateY(40%) scale(0.7);
      opacity: 0;
    }
    100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }
  }
`;
export const LogoWrapper = styled.div`
  margin: -20px auto 0;
  display: flex;
  justify-content: center;
`;

export const RxCross1Style = styled(RxCross1)`
  font-size: 22px;
  color: var(--socialSvgColor);
`;
export const CloseWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
