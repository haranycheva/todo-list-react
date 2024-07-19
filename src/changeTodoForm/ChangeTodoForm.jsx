import { FormBtn, InputText } from "../FormToDo/FormToDo.styled";
import { changeTodo, getSingleToDo } from "../fetch";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  title: Yup.string()
    .min(2, "Must be at least 2 characters")
    .required("Title is required"),
  description: Yup.string().required("Description is required"),
  level: Yup.string()
  .oneOf(["easy", "medium", "hard"], "Invalid level")
  .required("Level is required"),
});

export function ChangeTodoForm({ selectedItemId, onClose }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      const data = await getSingleToDo(selectedItemId);
      setSelectedItem(data);
    };
    fetch();
  }, [selectedItemId]);
  return (
    selectedItem && (
      <Formik
        initialValues={{
          level: selectedItem.level,
          title: selectedItem.title,
          description: selectedItem.description,
        }}
        enableReinitialize={true}
        validationSchema={schemaValidation}
        onSubmit={(values, { resetForm }) => {
          onClose();
          dispatch(changeTodo({ id: selectedItem._id, data: values }));
          resetForm({
            title: selectedItem.title,
            description: selectedItem.description,
            level: selectedItem.level,
          });
        }}
      >
          <Form>
            <InputText name="title" />
            <InputText name="description" />
            <Field
              as="select"
              name="level"
            >
              <option value="easy">Level 1</option>
              <option value="medium">Level 2</option>
              <option value="hard">Level 3</option>
            </Field>
            <FormBtn type="submit">change</FormBtn>
          </Form>
      </Formik>
    )
  );
}
