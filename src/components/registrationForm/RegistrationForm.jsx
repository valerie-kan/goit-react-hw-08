import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import css from "./RegistrationForm.module.css";

import { validationRegisterSchema } from "../../utils/schema";
import { register } from "../../redux/auth/operations";

import { ErrorToast } from "../../utils/errorToast";
import { selectError } from "../../redux/auth/selectors";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    try {
      console.log(values);
      dispatch(register(values));
      actions.resetForm();
    } catch (error) {
      ErrorToast(error.message || "Something went wrong!");
    }
  };

  useEffect(() => {
    if (error) {
      ErrorToast(error);
    }
  }, [error]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
      >
        <Form className={css.form}>
          <label className={css.formLabel}>
            Name
            <Field
              type="text"
              name="name"
              className={css.formField}
              placeholder="Enter your name..."
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={css.formLabel}>
            Email
            <Field
              type="text"
              name="email"
              className={css.formField}
              placeholder="Enter email..."
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={css.formLabel}>
            Password
            <Field
              type="password"
              name="password"
              className={css.formField}
              placeholder="Enter password..."
            />
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button type="submit" className={css.formBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationForm;
