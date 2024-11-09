import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/serchBox/SearchBox";
import { ContactList } from "./components/contactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import { selectError, selectLoading } from "./redux/selectors";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <h1 className="mainTitle">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {error ? <p>An error occured: {error}</p> : <ContactList />}
    </div>
  );
}

export default App;
