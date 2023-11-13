import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ redirectTo }) => {
  const token = useSelector(state => state.isLoggedIn);

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
