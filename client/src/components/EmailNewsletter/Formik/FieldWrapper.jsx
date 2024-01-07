import { Field, ErrorMessage, useFormikContext } from 'formik';

export default function FieldWrapper({ name, children }) {

    const formik = useFormikContext();

  return (
    <div>
      <div>
        <label htmlFor={name}>{children}</label>
        <Field id={name} name={name} />
      </div>
      <ErrorMessage name={name} >
      {msg => <div>{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
