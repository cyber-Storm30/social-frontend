import React from "react";
import { useStyles } from "./Styles";
import LoginComponent from "../../Components/Login/Login";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../Hooks/useAuth"
import { Navigate } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  if(useAuth() === true){
    return <Navigate to = "/home" />
  }

  return (
    <div className={classes.login}>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        Social
      </h1>
      <div className={classes.container}>
        <LoginComponent />
      </div>
    </div>
  );
};

export default Login;
