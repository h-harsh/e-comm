import { Route, Navigate } from "react-router-dom";
import { InToast } from "../components/Toast/toast"; 
import {useAuth} from '../Auth/authContetxt';
import { toast } from "react-toastify";

export const PrivateRoute = ({ path, ...props }) => {
  const { token } = useAuth();

  return token ? (
    <Route {...props} path={path} />
  ) : (<>
    {/* <InToast value={true} text={"You need to login first"} /> */}
    <Navigate state={{ from: path }} replace to="/login" />
  </>);
};
