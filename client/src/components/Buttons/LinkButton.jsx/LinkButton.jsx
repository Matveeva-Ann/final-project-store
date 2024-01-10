import { ButtonStyle } from './LinkButton.style';


export default function LinkButton({children, link, background}){
  return(
    <ButtonStyle to={link} background={background} >{children}</ButtonStyle>
  )
}