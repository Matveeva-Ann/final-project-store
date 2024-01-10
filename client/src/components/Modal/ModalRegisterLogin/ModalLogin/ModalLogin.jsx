import ModalBtn from '../ModalBtn/ModalBtn';
import { Formik } from 'formik';
import SchemaLogin from './validationSchema';
import { FieldStyle, FormStyle, FormWrapper } from '../ModalRegisterLogin.style';
import { BtnResetPassword } from './ModalLogin.style';

export default function ModalLogin({ closeModal, resetPassword }) {
  function handelSubmit() {}

  function openRestModal() {
    closeModal(false);
    resetPassword(true);
  }

  const initValue = {
    email: '',
    password: '',
  };

  return (
    <>
      <FormWrapper>
        <Formik initialValues={initValue} onSubmit={handelSubmit} validationSchema={SchemaLogin}>
          <FormStyle action="">
            <FieldStyle type="text" name="email" placeholder="*Email" />
            <FieldStyle type="password" name="password" placeholder="*Password" />
          </FormStyle>
        </Formik>
        <p>
          Забули пароль? <BtnResetPassword onClick={openRestModal}>Відновити</BtnResetPassword>
        </p>
        <ModalBtn>Увійти</ModalBtn>
      </FormWrapper>
    </>
  );
}
