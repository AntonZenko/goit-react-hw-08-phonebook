import Section from '../../Section/Section';
import ContactForm from '../../ContactForm/ContactForm';
import Filter from '../../Filter/Filter';
import ContactList from '../../ContactList/ContactList';

export default function Contacts() {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
      </Section>
      <Section title="Contact List">
        <ContactList />
      </Section>
    </>
  );
}
