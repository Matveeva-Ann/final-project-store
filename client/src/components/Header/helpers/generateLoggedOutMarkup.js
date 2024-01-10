import { BsCart3Style, FiUserStyle } from "../Header.style";
const { default: IconButton } = require("components/Buttons/IconButton/IconButton");

// Функція генерації розмітки для неавторизованого користувача
export default function generateLoggedOutMarkup(loginClick) {
  return (
    <>
      <IconButton ariaLabel='login' btnClick={()=>loginClick(true)}>
        <FiUserStyle />
      </IconButton>
      <IconButton ariaLabel='basket'>
        <BsCart3Style />
      </IconButton>
    </>
  );
}