import { Button } from "./IconButton.style";

export default function IconButton({children, ariaLabel, btnClick}){

  return(
    <Button type="button" aria-label={ariaLabel} onClick={btnClick ? ()=>btnClick() : undefined}>{children}</Button>
  )
}