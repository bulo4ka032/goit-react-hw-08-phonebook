import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  Label,
  Title,
  Input,
  Submit,
  Container,
  Image,
  ButtonText,
} from './RegisterForm.styled';
import catPng from '../../images/catPng.png';
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <Title>Username</Title>
          <Input type="text" name="name" placeholder="Peppa" />
        </Label>
        <Label>
          <Title>Email</Title>
          <Input type="email" name="email" placeholder="peppa@gmail.com" />
        </Label>
        <Label>
          <Title> Password</Title>
          <Input type="password" name="password" placeholder="peppa123" />
        </Label>
        <Submit type="submit">
          <ButtonText>Register</ButtonText>
        </Submit>
      </Form>
      <Image src={catPng} alt="cat" />
    </Container>
  );
};

export default RegisterForm;
