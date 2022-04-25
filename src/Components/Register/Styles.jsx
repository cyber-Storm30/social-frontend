import { makeStyles } from "@mui/styles";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints"

export const useStyles = makeStyles({
  register: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(380),
    padding: `${pixToRem(30)} ${pixToRem(20)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(8),
    gap: pixToRem(15),
    [theme.breakpoints.down("sm")]:{
      padding: `${pixToMvw(20)} ${pixToMvw(10)}`,
      width:pixToMvw(320),
      marginLeft:pixToMvw(20),
      borderRadius: pixToMvw(8),
    },
  },
  inputWrapper: {
    width: "100%",
    padding: `0 ${pixToRem(10)}`,
  },
  input: {
    width: "95%",
    height: pixToVw(30),
    padding: pixToRem(5),
    border: "1px solid gray",
    borderRadius: pixToRem(5),
    outline: "none",
    "&:focus": {
      border: "2px solid gray",
    },
    [theme.breakpoints.down("sm")]:{
      height: pixToMvw(25),
     },
  },
  inputText: {
    fontSize: pixToRem(14),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
    color: "#636363",
    [theme.breakpoints.down("sm")]:{
     fontSize:pixToMvw(12),
    },
  },
  text: {
    width: "100%",
    fontSize: pixToRem(11),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    color: "#636363",
    [theme.breakpoints.down("sm")]:{
      fontSize:pixToMvw(8),
     },
  },
  buttonWrapper: {
    padding: `${pixToRem(0)} ${pixToRem(10)}`,
  },
  button: {
    width: "100%",
    height: pixToVw(50),
    backgroundColor: "#0072b1",
    border: "none",
    outline: "none",
    color: "white",
    fontSize: pixToRem(18),
    fontWeight: "600",
    borderRadius: pixToRem(25),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]:{
      height: pixToMvw(50),
      borderRadius: pixToMvw(25),
      fontSize:pixToMvw(14),
     },
  },
  image: {
    width: pixToVw(30),
    height: pixToVw(20),
    [theme.breakpoints.down("sm")]:{
      width: pixToMvw(30),
      height: pixToMvw(20),
     },
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: pixToRem(5),
    width: "100%",
    height: pixToVw(50),
    border: "1px solid #0072b1",
    outline: "none",
    color: "#0072b1",
    fontSize: pixToRem(18),
    fontWeight: "600",
    borderRadius: pixToRem(25),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]:{
      height: pixToMvw(50),
      borderRadius: pixToMvw(25),
      fontSize:pixToMvw(14),
     },
  },
  signText: {
    display: "flex",
    justifyContent: "center",
    gap: pixToRem(5),
    fontSize: pixToRem(18),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    [theme.breakpoints.down("sm")]:{
      fontSize:pixToMvw(14),
     },
  },
  loginWrapper:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:pixToVh(10),
    [theme.breakpoints.down("sm")]:{
     },
  },
  loginButton:{
   width:pixToVw(100),
   height:pixToVw(40),
   borderRadius:pixToVw(18),
   border:"none",
   outline:"none",
   backgroundColor:"#0077b5",
   color:"white",
   cursor:"pointer",
   [theme.breakpoints.down("sm")]:{
    width:pixToMvw(100),
    height:pixToMvw(40),
    borderRadius:pixToMvw(18),
   },
  },
  loginText:{
    color: "#636363",
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]:{
      fontSize:pixToMvw(16),
     },
  }
});
