import styled from '@emotion/styled';
import { TiArrowSortedUp } from "react-icons/ti";

export const Button = styled.button`
  cursor: pointer;
  display: ${({ variant, visible }) => (variant === 'btnToTop' ? (visible ? 'block' : 'none') : '')};
  position: ${({ variant }) => (variant === 'btnToTop' ? 'fixed' : '')};
  bottom: ${({ variant }) => (variant === 'btnToTop' ? '20px' : '')};
  right: ${({ variant }) => (variant === 'btnToTop' ? '20px' : '')};;
  z-index: 999;
  border: none;
  border-radius: ${({ variant }) => (variant === 'btnToTop' ? '3px' : '0')};
  background-color: ${({ variant }) => (variant === 'btnToTop' ? 'var(--accentColorText)' : 'transparent')};
  padding: ${({ variant }) => (variant === 'btnToTop' ? '2px 5px' : '5px 10px')};
  color: var(--textColor);
  transition: opacity 0.3s ease;
  &:hover{
    opacity: 0.8;
  }
  @media (width < 450px) {
    padding: ${({ variant }) => (variant === 'btnToTop' ? '1px 3px' : '5px')};
  }
`;

export const ArrowUp = styled(TiArrowSortedUp)`
width : 60px;
height: 60px;
color: white;
@media (width < 450px) {
  width : 35px;
  height: 35px;
}
`