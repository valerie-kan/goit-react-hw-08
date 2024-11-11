import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <IoPerson style={{ color: "rgb(63, 175, 220)" }} /> {name}
        </p>
        <p>
          <FaPhone style={{ color: "rgb(63, 175, 220)" }} /> {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
