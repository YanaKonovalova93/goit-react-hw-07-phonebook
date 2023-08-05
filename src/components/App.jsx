import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { selectContacts } from '../redux/selectors';
import { ContactsList } from './Contacts/ContactsList';
import { ContactsForm } from './Contacts/ContactsForm';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactsList />
        </>
      ) : (
        <div>You don't have saved contacts...</div>
      )}
    </>
  );
};
