import { createContext, useContext, useState, useReducer } from "react";
import axios from 'axios'
import { useNavigate } from "react-router";
import { reducerFunc } from "./reducerFunction";
import {baseurl} from '../utils/apiCalls'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const savedToken = JSON.parse(localStorage.getItem("token")) ||  null;
    const [token, setToken] = useState(savedToken)
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState("")
    const [user, setUser] = useState(null)

    const [state, dispatch] = useReducer(reducerFunc, {});
    
     const logoutHandler = () => {
        localStorage.removeItem("token")
        setToken(null)
        setLoginState("")
        dispatch({type: "LOG_OUT"})
    }

     function setupAuthHeaderForServiceCalls(token) {
        if (token) {
          return (axios.defaults.headers.common["Authorization"] = token);
        }
        delete axios.defaults.headers.common["Authorization"];
      }

      setupAuthHeaderForServiceCalls(token)

    const loginHandler  = async (userName, password) => {
        console.log(userName, password)
        try{
            const response = await axios.post(`${baseurl}/user/login`,
         {userName, password},
         { headers: {
            "Content-Type" : "application/json" 
         }
        })
        setLoginState(response.data.status)
        if(response.data.status === "login success"){ 
            localStorage.setItem("token", JSON.stringify( response.data.token));
            // localStorage.setItem("login", JSON.stringify({loginStatus: true, token: response.data.token}));
            setToken(response.data.token)
            setLoginState("login success")
            setUser(response.data.user)
            return navigate("/")
        }
        }catch(error){
            console.log(error.response)
            console.log(error.response.data.status)
        }
    }
    return(
        <AuthContext.Provider value={{dispatch, state, token, loginState, loginHandler, logoutHandler, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}