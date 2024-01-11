import { Formik } from 'formik';
import ModalBtn from '../ModalBtn/ModalBtn';
import { FieldStyle, FormStyle, FormWrapper } from '../ModalRegisterLogin.style';
import { InputStyle, LabelStyle, LinkStyle } from './ModalRegister.style';
import SchemaRegister from './validationSchema';
import './style.css';

export default function ModalRegister() {
  function handelSubmit() {}

  const initValue = {
    userName: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  };

  return (
    <>
      <FormWrapper>
        <Formik initialValues={initValue} onSubmit={handelSubmit} validationSchema={SchemaRegister}>
          <FormStyle action="">
            <FieldStyle type="text" name="userName" placeholder="*Name" />
            <FieldStyle type="text" name="email" placeholder="*Email" />
            <FieldStyle type="password" name="password" placeholder="*Password" />
            <FieldStyle type="password" name="repeatPassword" placeholder="*Repeat password" />
          </FormStyle>
        </Formik>

        <input className="inputStyle" type="checkbox" id="myCheckbox" name="myCheckbox" />
        <label className="labelStyle" htmlFor="myCheckbox" style={{ margin: '16px 0' }}>
          Я погоджуюсь з <LinkStyle href="url_to_terms"> Правилами користування</LinkStyle>
        </label>
        <ModalBtn>Зареєструватись</ModalBtn>
      </FormWrapper>
    </>
  );
}
