import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormBtn } from "../FormToDo/FormToDo.styled";
import { useDispatch } from "react-redux";
import { register } from "../redux/oparations";

import * as Yup from "yup";

const schemaValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6, "Minimum 6 symbols").required("Password is required"),
  userName: Yup.string().required("User Name is required"),
});

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>sign up</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          userName: "",
        }}
          validationSchema={schemaValidation}
        onSubmit={(values, { resetForm }) => {
          resetForm({ email: "", password: "", userName: "" });
          dispatch(register(values));
        }}
      >
        <Form>
          <Field name="email" placeholder="user@example.com" type="email" />
          <ErrorMessage name="email" />
          <Field name="password" type="password" placeholder="password" />
          <ErrorMessage name="password" />
          <Field name="userName" type="text" placeholder="user name" />
          <ErrorMessage name="userName" />
          <FormBtn type="submit">submit</FormBtn>
        </Form>
      </Formik>
    </>
  );
};
