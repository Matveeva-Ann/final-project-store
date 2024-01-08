import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const FooterNavList = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    gap:15px;
`
export const FooterNavItem = styled.li`
    display:block;

`

export const FooterNavLink = styled(NavLink)`
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    color: var(--textColor);
`