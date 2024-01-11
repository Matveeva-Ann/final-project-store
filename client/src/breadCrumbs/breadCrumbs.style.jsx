import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const BreadCrumbsList = styled.ul`
  display: flex;
`;
export const BreadCrumbsItem = styled.li`
  list-style-type: none;
`;
export const BreadCrumbsLink = styled(Link)`
  text-decoration: none;
  color: var(--textColor);
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
`;
export const BreadCrumbsItemName = styled.span`
  color: var(--accentColorText);
  font-size: 18px;
  font-weight: 500;
`;
