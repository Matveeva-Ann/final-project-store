import styled from '@emotion/styled';
import flagUa from './icons/ukraine.svg';
import flagUk from './icons/united-kingdom.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  @media (width < 770px) {
    margin-right: -10px;
  }
`;

const flagImages = {
  'en': flagUk,
  'uk': flagUa,
};

export const FlagSpan = styled.span`
  display: inline-block;
  width: 18px;
  height: 12px;
  margin-left: 5px;
  background-size: cover;
  background-position: center;
  background-image: url(${props => flagImages[props.img] || 'none'});
  @media (width < 1200px) {
    display: none;
  }
  @media (width < 1100px) {
    display: inline-block;
  }
  @media (width < 500px) {
    display: none;
  }
`;

export const Select = styled.select`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px;
  outline: none;
  font-size: 14px;
  &:hover {
    opacity: 0.7;
  }
`;

