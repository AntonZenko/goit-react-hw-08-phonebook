import Section from '../../Section/Section';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';
import {
  ContactsPageBox,
  ContactsFormBox,
  ContactsListBox,
} from './Contacts.styled';

export default function Contacts() {
  return (
    <ContactsPageBox>
      <ContactsFormBox>
        <Section title="Create new contact">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
        </Section>
      </ContactsFormBox>
      <ContactsListBox>
        <Section title="Contact List">
          <ContactList />
        </Section>
      </ContactsListBox>
    </ContactsPageBox>
  );
}
