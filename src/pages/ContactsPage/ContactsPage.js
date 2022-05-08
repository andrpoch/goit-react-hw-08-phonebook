import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../../components/ContactsList/ContactsList';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/FilterSearch/FilterSearch';
import operations from '../../redux/contacts/contactsOperations';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
