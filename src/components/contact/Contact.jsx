import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

import css from "./Contact.module.css";
import Modal from "../modal/Modal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    onModalOpen();
  };

  return (
    <li className={css.contactItem}>
      <div>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={handleClick}>
        <RiDeleteBin6Line style={{ color: "black" }} />
      </button>
      {isModalOpen && <Modal id={id} onModalClose={onModalClose} />}
    </li>
  );
};

export default Contact;
