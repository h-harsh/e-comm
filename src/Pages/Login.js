import { LoginBox } from "../components/Login Box/loginbox";
import { useAuth } from "../Auth/authContetxt";

export const Login = () => {
  const { token } = useAuth();
  return token ? (
    <h1>You are Logged in</h1>
  ) : (
    <div className="outer-cont" style={{backgroundColor:'whitesmoke', height:'100%'}} >
      <LoginBox />
    </div>
  );
};
