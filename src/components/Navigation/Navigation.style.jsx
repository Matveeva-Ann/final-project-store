import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyle = styled.nav`
  display: flex;
  padding: 5px 0;
  @media (width < 1150px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding: 0 20px;
  margin: 0;
`;

export const NuvItem = styled.li`
  position: relative;
  margin: 0 5px;

  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 100%;
    transform: scale(0);
    height: 3px;
    background-color: var(--nuvHoverStyle);
    bottom: 0;
    left: 0;
    border-radius: 25px;
    transition: transform 250ms linear;
  }

  &:hover {
    &::after {
      transform: scale(1);
    }
  }
`;

export const NuvLinkStyle = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: var(--textColor);
  font-size: 20px;
  &.active {
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: var(--nuvHoverStyle);
      bottom: 0;
      left: 0;
      border-radius: 25px;
      transition: transform 250ms linear;
    }
  }
`;

//DropDown style

export const NavDropDownWrapper = styled.div`
  @media (width > 1150px) {
    display: none;
  }
  position: absolute;
  background-color: #ffffff70;
  backdrop-filter: blur(15px);
  width: 100%;
  visibility: ${props => (props.isOpenDropDown ? 'visible' : 'hidden')};
  top: ${props => (props.isOpenDropDown ? '64px' : '-100%')};
  left: 0;
  transition:
    top 400ms linear,
    visibility 250ms ease-in-out;
  z-index: 2;
`;

export const NavListDropDown = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NuvLinkDropDown = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: var(--textColor);
  font-size: 20px;
  padding: 10px 20px;
  transition: background-color 200ms linear;
  padding-left: 13%;

  &:hover {
    opacity: 0.6;
  }

  &.active {
    font-weight: 600;
    font-size: 25px;
  }
  @media (width < 770px) {
    padding-left: 5%;
    font-size: 18px;
  }
  @media (width < 450px) {
    font-size: 15px;
  }
`;
