import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import css from "./LoginForm.module.css";

import { validationLoginSchema } from "../../utils/schema";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationLoginSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel}>
          Email
          <Field type="text" name="email" className={css.formField} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.formLabel}>
          Password
          <Field type="password" name="password" className={css.formField} />
          <ErrorMessage
            className={css.errorMessage}
            name="name"
            component="span"
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Log in
        </button>
      </Form>
    </Formik>
  );
};
