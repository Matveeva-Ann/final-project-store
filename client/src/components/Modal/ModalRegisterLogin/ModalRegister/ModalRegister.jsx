import { ErrorMessage, Field, Formik } from 'formik';
import ModalBtn from '../ModalBtn/ModalBtn';
import { ErrorMessageStyle, FieldStyle, FormStyle, FormWrapper } from '../ModalRegisterLogin.style';
import { InputStyle, LabelStyle, LinkStyle } from './ModalRegister.style';
import SchemaRegister from './validationSchema';
import './style.css';
import ModalField from '../ModalField';
import fieldsData from './fieldsArr';

const initValue = {
  userName: '',
  email: '',
  phone: '',
  password: '',
  repeatPassword: '',
};

export default function ModalRegister() {
  const handelSubmit = (values, { resetForm }) => {
    console.log(values);
    if (values.password !== values.repeatPassword || !values.agree) {
      return;
    }
    delete values.repeatPassword;
    delete values.agree;
    values.isAdmin = false;
    values.login = 'swdqdde';
    values.lastName = 'ascascasc';
    values.firstName = 'ascacacasc';
    sendRegisterData(values, resetForm);
  };

  async function sendRegisterData(data, resetForm) {
    console.log('Дані, які відправляються на сервер', data);

    try {
      const response = await fetch('http://localhost:4000/api/customers', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer YOUR_ACCESS_TOKEN',
          'Custom-Header': 'custom-value',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log('Відповідь від сервера:', responseData);
      resetForm();
    } catch (error) {
      console.error('Помилка під час виконання запиту:', error.message);
    }
  }

  return (
    <>
      <FormWrapper>
        <Formik initialValues={initValue} onSubmit={handelSubmit} validationSchema={SchemaRegister}>
          <FormStyle action="">
            {fieldsData.map(fieldData => (
              <div style={{ position: 'relative'}} key={fieldData.name}>
                <ModalField fieldData={fieldData}></ModalField>
              </div>
            ))}

            <div style={{ position: 'relative', margin: '-20px 0 0 0' }}>
              <Field className="inputStyle" name="agree" type="checkbox" id="myCheckbox" checked/>
              <label className="labelStyle" htmlFor="myCheckbox" style={{ margin: '16px 0' }}>
                Я погоджуюсь з <LinkStyle href="url_to_terms"> Правилами користування</LinkStyle>
              </label>
              <ErrorMessageStyle>
                <ErrorMessage name="agree" />
              </ErrorMessageStyle>
            </div>

            <ModalBtn>Зареєструватись</ModalBtn>
          </FormStyle>
        </Formik>
      </FormWrapper>
    </>
  );
}
