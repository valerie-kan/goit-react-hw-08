import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import css from "./ContactsPage.module.css";

import Loader from "../../components/loader/Loader";
import ContactForm from "../../components/contactForm/ContactForm";
import SearchBox from "../../components/searchBox/SearchBox";
import { ContactList } from "../../components/contactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {error ? (
        <p className={css.errorText}>An error occured: {error}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default ContactsPage;
