import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard' } };
  if (user.isLoggedIn) {
    return Outlet(from);
  }
  return <Navigate to={{ pathname: '/', state: { from } }} />;
};

export default RequireAuth;
