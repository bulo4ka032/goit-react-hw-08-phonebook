import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: #50505d;
  font-size: 26px;
  font-weight: 300;
  transition: font-weight 250ms ease-out;

  &.active {
    font-weight: 500;
  }

  &:hover,
  &:focus {
    font-weight: 500;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 44px;
  align-items: center;
  margin-left: 24px;
`;
