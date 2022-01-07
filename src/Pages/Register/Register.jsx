import React from "react";
import { useStyles } from "./Styles";
import RegisterComponent from "../../Components/Register/RegisterComponent";

const Register = () => {
  const classes = useStyles();
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
