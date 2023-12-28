import IconButton from "components/IconButton/IconButton";
import { BsCart3Style, MdFavoriteBorderStyle } from "../Header.style";

// Функція генерації розмітки для авторизованого користувача
export default function generateLoggedInMarkup() {
  return (
    <>
      <IconButton ariaLabel='add to favorite'>
        <MdFavoriteBorderStyle />
      </IconButton>
      <IconButton ariaLabel='basket'>
        <BsCart3Style />
      </IconButton>
    </>
  );
}