// import { useSelector } from 'react-redux';
import { Contact } from '../index';
// import { selectAllContacts } from 'redux/contacts/selectors';
import { List, Item } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <List>
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Contact id={id} name={name} number={number} />
          </Item>
        ))}
      </List>
    </div>
  );
};

export default ContactsList;
