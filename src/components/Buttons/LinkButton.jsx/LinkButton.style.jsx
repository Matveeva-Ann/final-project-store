import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonStyle = styled(Link)`
  cursor: pointer;
  padding: 12px 24px;
  border: 2px solid var(--accentColorText);
  background: ${props => (props.buttonStyle === 'transparent' ? 'transparent' : 'var(--accentColorText)')};
  color: ${props => (props.buttonStyle === 'transparent' ? 'var(--accentColorText)' : '#fff')};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;
  flex-grow: 1;
  text-decoration: none;
  text-align: center;
  :hover {
    background: #fff;
    color: var(--accentColorText);
  }
`;
