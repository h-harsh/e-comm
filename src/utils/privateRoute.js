import { Route, Navigate } from "react-router-dom"; 
import {useAuth} from '../Auth/authContetxt';

export const PrivateRoute = ({ path, ...props }) => {
  const { token } = useAuth();

  return token ? (
    <Route {...props} path={path} />
  ) : (<>
    {/* <InToast value={true} text={"You need to login first"} /> */}
    <Navigate state={{ from: path }} replace to="/login" />
  </>);
};
