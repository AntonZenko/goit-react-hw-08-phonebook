import ContactListItem from '../ContactListItem/ContactListItem';
import { List, Message } from './ContactList.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, contactsOperations } from '../redux/contact';
import { filterSelector } from '../redux/filter';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors);
  const filter = useSelector(filterSelector);

  useEffect(() => {
    dispatch(contactsOperations.getUserContacts());
  }, [dispatch]);

  console.log(contacts);

  return (
    <List>
      {contacts && contacts.length > 0 ? (
        (filter
          ? contacts.filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
          : contacts
        ).map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <Message>Your phonebook is empty. Please add contact.</Message>
      )}
    </List>
  );
}

export default ContactList;
