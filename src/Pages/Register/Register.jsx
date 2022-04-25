import React from "react";
import { useStyles } from "./Styles";
import RegisterComponent from "../../Components/Register/RegisterComponent";
import {useAuth} from "../../Hooks/useAuth"
import { Navigate } from "react-router-dom";

const Register = () => {
  const classes = useStyles();
  if(useAuth() === true){
    return <Navigate to = "/home" />
  }

  return (
    <div className={classes.registerWrapper}>
      <div className={classes.register}>
        <h1 className={classes.title}>THE SOCIAL</h1>
        <h3 className={classes.subtitle}>Make the most of your free life</h3>
        <RegisterComponent />
      </div>
    </div>
  );
};

export default Register;
