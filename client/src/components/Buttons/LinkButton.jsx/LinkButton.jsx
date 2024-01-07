import { ButtonStyle } from './LinkButton.style';


export default function LinkButton({link, buttonStyle, children}){

  return(
    <ButtonStyle to={link} buttonStyle={buttonStyle}>{children}</ButtonStyle>
  )
}