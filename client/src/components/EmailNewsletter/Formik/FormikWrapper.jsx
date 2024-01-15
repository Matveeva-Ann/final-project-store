import FieldWrapper from './FieldWrapper';
import {checkoutSchema } from './validation';
import Button from '../../Buttons/Button/Button';
import { Formik } from 'formik';
import { FormWrapper, BtnWrapper } from '../EmailNewsletter.style';

export default function FormikWrapper() {

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values.email);

    try {
      const newSubscriber = {
        email: values.email,
        enabled: true,
        letterSubject: values.letterSubject || "Your default subject here",
        letterHtml: values.letterHtml || "Your default HTML here",
        date: new Date(),
      };
  
      const response = await fetch('http://localhost:4000/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSubscriber),
      });
  
      console.log(response);
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
      }
      const responseData = await response.json();
      console.log('Відповідь від сервера:', responseData);
      resetForm();
    } catch (error) {
      console.error('Помилка під час виконання запиту:', error.message);
    }
  };
  
  return (
    <div>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={handleSubmit}
      >
          <FormWrapper>
            <FieldWrapper  name="email" children='Email' />
            <BtnWrapper>
              <Button 
              fontSize="20px" 
              padding="12px 24px"
              radius="50px" 
              type="submit"
              >
                Submit
              </Button>
            </BtnWrapper>
          </FormWrapper>
      </Formik>
    </div>
  );
}
