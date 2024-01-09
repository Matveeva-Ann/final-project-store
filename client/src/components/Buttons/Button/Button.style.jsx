import styled from '@emotion/styled';

export const ButtonStyle = styled.button`
  cursor: pointer;
  padding: 12px 24px;
  border: 2px solid var(--accentColorText);
  background: ${props => (props.isTransparent ? 'transparent' : 'var(--accentColorText)')};
  color: ${props => (props.isTransparent ? 'var(--accentColorText)' : '#fff')};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  flex-grow: 1;
  border-radius: ${props => (props.radius)};
  :hover {
    background: #fff;
    color: var(--accentColorText);
  }
`;
