import styled from '@emotion/styled';
import { BsCart3 } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0% 13% 0% 13%;
  overflow: hidden;
  min-height: 80px;
  background-color: var(--backgroundColor);
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.1);
  z-index: 3;
  @media (width < 1150px) {
    min-height: 60px;
    max-height: 64px;
  }
  @media (width < 770px) {
    padding: 0% 5% 0% 5%;
  }
`;

export const LogoImg = styled.img`
  max-height: 95px;
  padding: 0 10px;
  @media (width<1150px) {
    max-height: 60px;
  }
  @media (width < 450px) {
    max-height: 45px;
    padding: 0 5px;
  }
`;

export const LinkStyle = styled(Link)`
  @media (width<1150px) {
    order: 2;
  }
`;
export const IconButtonWrapper = styled.div`
  @media (width<1150px) {
    order: 1;
  }
`;

export const RxCross1Style = styled(RxCross1)`
  display: none;
  @media (width < 1150px) {
    display: block;
    font-size: 27px;
    padding: 5px;
  }
  @media (width < 450px) {
    font-size: 20px;
  }
`;
export const RxHamburgerMenuStyle = styled(RxHamburgerMenu)`
  display: none;
  @media (width < 1150px) {
    display: block;
    font-size: 27px;
    padding: 5px;
  }
  @media (width < 450px) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const IconsWrapper = styled.div`
  display: flex;
  @media (width<1150px) {
    order: 3;
  }
`;

export const BsCart3Style = styled(BsCart3)`
  font-size: 25px;
  @media (width < 450px) {
    font-size: 20px;
  }
`;
export const MdFavoriteBorderStyle = styled(MdFavoriteBorder)`
  font-size: 25px;
  @media (width < 450px) {
    font-size: 20px;
  }
`;
export const FiUserStyle = styled(FiUser)`
  font-size: 25px;
  @media (width < 450px) {
    font-size: 20px;
  }
`;
