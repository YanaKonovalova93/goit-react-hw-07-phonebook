import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <div>You don't have saved contacts...</div>
      )}
    </>
  );
};
