import Navigation from 'components/Navigation/Navigation';
import Logo from './Logo';
import LanguageToggle from './LanguageToggle/LanguageToggle';
import { ButtonWrapper, HeaderStyle, IconButtonWrapper, IconsWrapper, RxCross1Style, RxHamburgerMenuStyle } from './Header.style';
import { lazy, Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import { generateLoggedInMarkup, generateLoggedOutMarkup } from './helpers';
import IconButton from 'components/Buttons/IconButton/IconButton';
import ModalRegisterLogin from 'components/Modal/ModalRegisterLogin/ModalRegisterLogin';
import ModalResetPassword from 'components/Modal/ModalResetPassword/ModalResetPassword';

const NavDropDownComponent = lazy(() => import('../Navigation/NavDropDown'));

export default function Header() {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const isUserLogin = useSelector(authSelectors.getIsLoggedIn);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  
  //функція відкривання випадаючого меню
  function toggleDropDown() {
    setIsOpenDropDown(!isOpenDropDown);
  }

  function toggleLoginModal(){
    setIsModalLoginOpen(!isModalLoginOpen);
   
  }

  return (
    <>
      <HeaderStyle>
        <Logo size='95px'></Logo>
        <Navigation></Navigation>
        <IconButtonWrapper>
          <IconButton
            btnClick={toggleDropDown}
            ariaLabel={isOpenDropDown ? 'close drop down menu' : 'open drop down menu'}
          >
            {isOpenDropDown ? <RxCross1Style /> : <RxHamburgerMenuStyle />}
          </IconButton>
        </IconButtonWrapper>

        <IconsWrapper>
          <ButtonWrapper>{isUserLogin ? generateLoggedInMarkup() : generateLoggedOutMarkup(toggleLoginModal)}</ButtonWrapper>
          <LanguageToggle></LanguageToggle>
        </IconsWrapper>
      </HeaderStyle>

      <Suspense fallback={<div>Loading...</div>}>
        <NavDropDownComponent isOpenDropDown={isOpenDropDown} setIsOpenDropDown={setIsOpenDropDown} />
      </Suspense>

      {isModalLoginOpen && <ModalRegisterLogin closeModal = {toggleLoginModal} resetPassword={setIsResetModalOpen}></ModalRegisterLogin>}
      {isResetModalOpen && <ModalResetPassword closeModal={setIsResetModalOpen}></ModalResetPassword>}
    </>
  );
}
