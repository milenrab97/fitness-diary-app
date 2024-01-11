import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ProtectedRoute = ({
  isAllowed,
  redirectTo = '/landing',
  children,
}: any) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
