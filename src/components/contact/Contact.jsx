import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
