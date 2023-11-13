import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = ({ redirectTo = '/home', restricted = false }) => {
  const token = useSelector(state => state.isLoggedIn);
  const shouldRedirect = token && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo}></Navigate>
  ) : (
    <Outlet></Outlet>
  );
};

export default PublicRoute;
