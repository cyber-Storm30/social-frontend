import React, { useState } from "react";
import { ReactComponent as Image } from "../../Assets/google.svg";
import { useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/Actions/auth";
import { useStyles } from "./Styles";
import axios from "axios";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.auth.user);

  const handleSignIn = () => {
    try {
      dispatch(loginStart({ email, password }));
      if (user) navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.register}>
      <div className={classes.top}>
        <h1 className={classes.title}>Sign in</h1>
        <p className={classes.subtitle}> Sign in to waste your precious time</p>
      </div>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          className={classes.input}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div className={classes.inputWrapper}>
        <input
          type="password"
          className={classes.input}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <p className={classes.text}>Forgot Password?</p>

      <div className={classes.buttonWrapper}>
        <button className={classes.button} onClick={handleSignIn}>
          Sign in
        </button>
      </div>
      <Divider />

      <div className={classes.buttonWrapper}>
        <button className={classes.googleButton}>
          <Image src={Image} className={classes.image} />
          <p>sign in with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
