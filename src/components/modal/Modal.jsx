import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { TiArrowBack } from "react-icons/ti";
import { GrStatusGood } from "react-icons/gr";

import css from "./Modal.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Modal = ({ id, onModalClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        onModalClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onModalClose]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  };

  const onYesClick = () => {
    dispatch(deleteContact(id));
  };

  const onNoClick = () => {
    onModalClose();
  };

  return (
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        <p className={css.modalText}>
          Are you sure you want to delete the contact?
        </p>
        <div className={css.modalBtns}>
          <button className={css.btn} type="button" onClick={onYesClick}>
            Do it <GrStatusGood />
          </button>
          <button className={css.btn} type="button" onClick={onNoClick}>
            Go back <TiArrowBack />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
