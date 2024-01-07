import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  color: var(--textColor);
  &:hover{
    opacity: 0.8;
  }
  @media (width < 450px) {
    padding: 5px;
  }
`;
