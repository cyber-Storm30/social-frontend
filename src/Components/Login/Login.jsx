import React, { useState } from "react";
import { ReactComponent as Image } from "../../Assets/google.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/Actions/auth";
import { useStyles } from "./Styles";
import { axiosClient } from "../../Services/apiClient";
import { pixToRem, pixToVw } from "../../Utils/pixToRem";
import CircularProgress from "@mui/material/CircularProgress";
import Loader from "../../shared/Loader";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const handleSignIn = async () => {
    dispatch(loginStart());
    setLoading(true);
    try {
      const res = await axiosClient.post("/auth/login", {
        email: email,
        password: password,
      });
      console.log(res);
      if (res.data.status == true) {
        dispatch(loginSuccess(res.data));
        setLoading(false);
      } else {
        setError(res.data.message);
        setLoading(false);
      }
    } catch (err) {
      dispatch(loginFailure());
      setLoading(false);
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
      {error && <p className={classes.errorText}>{error}</p>}
      <p className={classes.text}>Forgot Password?</p>

      <div className={classes.buttonWrapper}>
        {loading ? (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ color: "#0072b1" }} />
          </div>
        ) : (
          <button className={classes.button} onClick={handleSignIn}>
            Sign in
          </button>
        )}
      </div>
      <Divider />

      <div
        className={classes.buttonWrapper}
        onClick={() => {
          navigate("/register");
        }}
      >
        <button className={classes.googleButton}>
          <p>New to Social? Sign up</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
