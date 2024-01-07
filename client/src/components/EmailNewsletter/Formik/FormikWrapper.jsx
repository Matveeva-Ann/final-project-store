import FieldWrapper from './FieldWrapper';
import { checkoutSchema } from './validation';
import Button from '../../Buttons/Button/Button';
import { Formik, Form} from 'formik';

export default function FormikWrapper() {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={values => console.log(values)}
      >
        {({ errors, touched }) => (
          <Form  >
            <FieldWrapper name="Email" children="Email" />
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
