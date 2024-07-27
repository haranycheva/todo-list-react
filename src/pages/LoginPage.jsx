import { Field, Formik } from "formik";
import { FormBtn } from "../FormToDo/FormToDo.styled";
import { Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/oparations";
import * as Yup from "yup";
import { selectorLodingForAuth } from "../redux/authSelectors";
import { Loader } from "../Loader/Loader";

const schemaValidation = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .min(6, "Minimum 6 symbols")
    .required("Password is required"),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLodingForAuth);
  return (
    <>
      {isLoading && <Loader />}
      <h1>login</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schemaValidation}
        onSubmit={(values, { resetForm }) => {
          dispatch(login(values));
          resetForm({ email: null, password: null });
        }}
      >
        <Form>
          <Field name="email" placeholder="user@example.com" type="email" />
          <Field name="password" type="password" placeholder="password" />
          <FormBtn type="submit">submit</FormBtn>
        </Form>
      </Formik>
    </>
  );
};
