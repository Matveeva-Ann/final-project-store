import { LogoWrapper } from "./Modal.style";
import logo from '../ModalRegisterLogin/img/logo.png'

export default function ModalLogo(){
  return(
    <LogoWrapper>
      <img src={logo} style={{maxHeight: '85px'}} alt="" />
    </LogoWrapper>
  )
}