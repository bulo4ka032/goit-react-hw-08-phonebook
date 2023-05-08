import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 32px;
  margin-right: 24px;
`;

export const NavItem = styled(NavLink)`
  background-color: white;
  padding: 4px 12px;
  color: #50505d;

  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  border-radius: 15px;
  transition: box-shadow 250ms ease-out;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.14);
  }
`;
