import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import css from "./LoginForm.module.css";

import { validationLoginSchema } from "../../utils/schema";
import { login } from "../../redux/auth/operations";

import { ErrorToast } from "../../utils/errorToast";
import { selectError } from "../../redux/auth/selectors";
import { useEffect } from "react";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = (values, actions) => {
    try {
      dispatch(login(values));
      actions.resetForm();
    } catch (error) {
      ErrorToast(error.message || "Email or password is wrong");
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
        validationSchema={validationLoginSchema}
      >
        <Form className={css.form}>
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
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
