import { useAuth } from 'hooks/useAuth';
import { NavItem, Nav } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </Nav>
  );
};

export default Navigation;
