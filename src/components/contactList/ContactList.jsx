import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  console.log(filteredList);

  return (
    <>
      {filteredList.length === 0 ? (
        <p className={css.noContactsMess}>
          There is no contacts yet 😔 Please add at least one...
        </p>
      ) : (
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
      )}
    </>
  );
};
