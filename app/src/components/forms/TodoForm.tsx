import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { Button } from '../common/Button';
import { TextField } from '../common/TextField';

interface IValue {
  description: string;
}

export const TodoForm: React.FC = () => {
  const ipcRenderer = (window as any).ipcRenderer;

  const initialValues: IValue = {
    description: '',
  };
  const handleSubmit = (values: IValue) => {
    console.log('values', values);
    ipcRenderer.send('submit:todoForm', values);
  };
  const validationSchema = Yup.object().shape({
    description: Yup.string().required(),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="shadow border rounded-xl p-4 my-4">
          <div className="my-4">
            <label htmlFor="description" className="font-bold">
              Task description
            </label>
            <Field
              name="description"
              id="description"
              component={TextField}
              placeholder="Enter the description"
              autoFocus={true}
            />
          </div>
          <Button text="Add" />
        </Form>
      </Formik>
    </div>
  );
};
