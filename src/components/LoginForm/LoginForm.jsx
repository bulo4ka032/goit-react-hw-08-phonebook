import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  Title,
  Input,
  Submit,
  Container,
  Image,
} from './LoginForm.styled';
import catLogIn from '../../images/catLogIn.jpeg';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <Title>Email</Title>
          <Input type="email" name="email" placeholder="peppa@gmail.com" />
        </label>
        <label>
          <Title>Password</Title>
          <Input type="password" name="password" placeholder="peppa123" />
        </label>
        <Submit type="submit">Log In</Submit>
      </Form>
      <Image src={catLogIn} alt="" />
    </Container>
  );
};

export default LoginForm;
