import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  Form,
  Title,
  Container,
  Input,
  Submit,
  Image,
} from './ContactsEditor.styled';
import catContacts from '../../images/catContacts.png';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Notify } from 'notiflix';
import { Filter } from '../index';

const ContactsEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const text = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    if (contacts.find(contact => contact.name === text.name)) {
      return Notify.warning(`${text.name} is already in contact`);
    }

    if (text !== '') {
      dispatch(addContact(text));
      form.reset();
      return;
    }

    alert('Task cannot be empty. Enter some text!');
  };

  return (
    <Container>
      <div>
        <Form onSubmit={handleSubmit}>
          <label>
            <Title>Name</Title>
            <Input type="text " name="name" />
          </label>
          <label>
            <Title>Number</Title>
            <Input type="tel" name="number" />
          </label>
          <Submit type="submit">Add contact</Submit>
        </Form>
        <Filter></Filter>
      </div>
      <Image src={catContacts} alt="cat" />
    </Container>
  );
};

export default ContactsEditor;
