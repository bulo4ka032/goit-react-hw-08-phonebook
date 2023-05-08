import { Container, NavItem } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Log In</NavItem>
    </Container>
  );
};

export default AuthNav;
