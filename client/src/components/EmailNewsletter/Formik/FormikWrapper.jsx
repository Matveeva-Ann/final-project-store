import FieldWrapper from './FieldWrapper';
import {checkoutSchema } from './validation';
import Button from '../../Buttons/Button/Button';
import { Formik } from 'formik';
import { FormWrapper, BtnWrapper } from '../EmailNewsletter.style';

export default function FormikWrapper() {
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={(values, {resetForm}) => {resetForm(); console.log("Email User:", values)}}
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <FieldWrapper name="email" children={'Email'} />
            <BtnWrapper>
              <Button radius="50px" type="submit">
                Submit
              </Button>
            </BtnWrapper>
          </FormWrapper>
        )}
      </Formik>
    </div>
  );
}
