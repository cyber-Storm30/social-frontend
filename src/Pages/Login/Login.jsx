import React from "react";
import { useStyles } from "./Styles";
import LoginComponent from "../../Components/Login/Login";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
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
