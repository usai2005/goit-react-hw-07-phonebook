import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { Loader } from './Loader/Loader';
import css from '../components/App.module.css';

export const App = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.phonebook__section}>
      {error && <p>{error}</p>}
      {/* <p>{contacts.length > 0 && JSON.strigify(contacts, null, 2)}</p> */}
      <h1 className={css.phonebook__title}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts__title}>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </main>
  );
};
