import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Container, Name, Number, Delete } from './Contact.styled';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Container>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Delete type="button" onClick={handleDelete}>
        Delete
      </Delete>
    </Container>
  );
};

export default Contact;
