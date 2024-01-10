import ModalWrapper from '../ModalElements/ModalWrapper';
import ModalBtn from '../ModalRegisterLogin/ModalBtn/ModalBtn';
import { Input, Text, Title, BtnWrapper } from './ModalResetPassword.style';

export default function ModalResetPassword({ closeModal }) {
  return (
    <>
      <ModalWrapper closeModalReset={closeModal}>
        <Title>ВІДНОВИТИ ПАРОЛЬ</Title>
        <Text>Введіть е-мейл, на який буде відправлено код підтвердження</Text>
        <Input type="email" placeholder="*Email" />
        <BtnWrapper>
          <ModalBtn>ВІДНОВИТИ ПАРОЛЬ</ModalBtn>
        </BtnWrapper>
      </ModalWrapper>
    </>
  );
}
