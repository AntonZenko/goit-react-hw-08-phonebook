import ContactListItem from 'components/ContactListItem';
import { List, Message } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../redux/contactApi';
import { getFilter } from '../redux/filterSlice';

function ContactList() {
  const { data: contactList, isLoading } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  function visibleContacts() {
    const normalizedFilter = filter.toLowerCase();
    return filter
      ? contactList.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
      : contactList;
  }
  const contacts = visibleContacts();

  return (
    <List>
      {isLoading ? (
        <Message>LOADING...</Message>
      ) : contacts.length === 0 ? (
        <Message>Contact not found&#129335;</Message>
      ) : (
        contacts.map(({ name, phone, id }) => (
          <ContactListItem name={name} number={phone} key={id} id={id} />
        ))
      )}
    </List>
  );
}

export default ContactList;
