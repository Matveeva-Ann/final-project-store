import { useAuth } from 'hook/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  //в якості children буде будь-яка сторінка
  const location = useLocation();
  const auth = useAuth(); //окремий буде хук для перевірки авторизації
  if (!auth) {
    return <Navigate to="/adminLogin" state={{ from: location }}></Navigate>;
  }
  return children;
};

export { RequireAuth };
