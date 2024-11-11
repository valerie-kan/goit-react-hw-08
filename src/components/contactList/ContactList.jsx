import { useSelector } from "react-redux";
import {
  selectFilter,
  selectFilteredContacts,
} from "../../redux/filters/selectors";

import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { selectLoading } from "../../redux/contacts/selectors";

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const startFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {!startFilter && filteredList.length === 0 && !isLoading && (
        <p className={css.noContactsMess}>There is no contacts yet 😔</p>
      )}
      {startFilter && filteredList.length === 0 ? (
        <p className={css.noContactsMess}>
          There is no contacts according to your search...
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
