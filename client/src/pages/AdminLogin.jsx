import ModalLogin from 'components/Modal/ModalRegisterLogin/ModalLogin/ModalLogin';
// import { Btn } from 'components/Modal/ModalRegisterLogin/ModalRegisterLogin.style';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'hook/useAuth';

export default function AdminLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';
  const handleSubmit = event => {
    event.PreventDefault();
    const form = event.target;
    const user = form.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };
  return (
    <>
      <h1>Admin Login</h1>
      <ModalLogin></ModalLogin>
      {/* {fromPage} */}
    </>
  );
}
