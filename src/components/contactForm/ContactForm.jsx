import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { validationContactsSchema } from "../../utils/schema";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationContactsSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          Name
          <Field
            className={css.formField}
            type="text"
            name="name"
            placeholder="John Smith"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          Number
          <Field
            className={css.formField}
            type="text"
            name="number"
            placeholder="XXX-XXX-XXXX"
          />
          <ErrorMessage
            className={css.errorMessage}
            name="number"
            component="span"
          />
        </label>
        <button className={css.formBtn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
