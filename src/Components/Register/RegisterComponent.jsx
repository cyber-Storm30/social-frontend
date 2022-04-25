import { Divider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./Styles";
import { ReactComponent as Image } from "../../Assets/google.svg";
import { useNavigate } from "react-router-dom";
import { signupStart } from "../../redux/Actions/auth";
import { axiosClient } from "../../Services/apiClient";

const RegisterComponent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [toogle, setToogle] = useState(false);
  const [success,setSuccess] = useState(false)

  const navigate = useNavigate();

  const handleToogle = () => {
    if (email && password) {
      setToogle(true);
    } else {
      window.alert("Enter email and password");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axiosClient.post("/auth/register", {
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
      });
      if(res){
         setSuccess(true)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
<>
    {  !success ?  <div className={classes.register}>
  
      {!toogle ? (
        <div className={classes.inputWrapper}>
          <p className={classes.inputText}>Email or phone number</p>
          <input
            type="email"
            value={email}
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      ) : (
        <div className={classes.inputWrapper}>
          <p className={classes.inputText}>First Name</p>
          <input
            type="text"
            className={classes.input}
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      )}
      {!toogle ? (
        <div className={classes.inputWrapper}>
          <p className={classes.inputText}>Password(6 or more character)</p>
          <input
            className={classes.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      ) : (
        <div className={classes.inputWrapper}>
          <p className={classes.inputText}>Last Name</p>
          <input
            type="text"
            className={classes.input}
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      )}
      {!toogle && (
        <p className={classes.text}>
          By clicking Agree and Join, you agree to the Social User Agreement,
          Privacy Policy, and Cookie Policy.
        </p>
      )}
      <div className={classes.buttonWrapper}>
        {!toogle ? (
          <button className={classes.button} onClick={handleToogle}>
            Agree and join
          </button>
        ) : (
          <button
            className={classes.button}
            onClick={handleToogle}
            onClick={handleRegister}
          >
            continue
          </button>
        )}
      </div>
      {!toogle && <Divider />}
      {!toogle && (
        <div className={classes.buttonWrapper}>
          <button className={classes.googleButton}>
            <Image src={Image} className={classes.image} />
            <p>join with Google</p>
          </button>
        </div>
      )}
      {!toogle && (
        <p className={classes.signText}>
          Already on Social?
          <span
            style={{ color: " #0072b1", cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Sign in
          </span>
        </p>
      )}
    
    </div>:
    <div className={classes.loginWrapper}>
      <h1 className={classes.loginText}>You have Successfully registed. Please sign in to continue</h1>
      <button className = {classes.loginButton} onClick = {()=>{navigate("/")}}>Login In</button>
      </div>}
      </>
  );
};

export default RegisterComponent;
