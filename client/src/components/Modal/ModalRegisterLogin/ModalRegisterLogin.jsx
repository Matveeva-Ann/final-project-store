import { useState } from 'react';
import ModalWrapper from '../ModalElements/ModalWrapper';
import ModalLogin from './ModalLogin/ModalLogin';
import ModalRegister from './ModalRegister/ModalRegister';
import { Btn, BtnWrapper } from './ModalRegisterLogin.style';

export default function ModalRegisterLogin({ closeModal, resetPassword }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ModalWrapper closeModal={closeModal}>
      <BtnWrapper>
        <Btn style={{fontWeight: `${isLogin ? 700 :200}`, opacity: `${isLogin ? 1 : 0.5}`}} onClick={()=>setIsLogin(true)}>Вхід</Btn>
        <Btn style={{fontWeight: `${isLogin ? 200 :700}`, opacity: `${isLogin ? 0.5 : 1}`}} onClick={()=>setIsLogin(false)}>Реєстрація</Btn>
      </BtnWrapper>
      {isLogin ? <ModalLogin closeModal={closeModal} resetPassword={resetPassword}></ModalLogin> : <ModalRegister></ModalRegister>}
    </ModalWrapper>
  );
}
