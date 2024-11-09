import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredList.map((item) => (
        <Contact
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};
