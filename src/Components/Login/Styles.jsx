import { makeStyles } from "@mui/styles";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints"

export const useStyles = makeStyles({
  register: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(350),
    height:pixToVw(400),
    padding: `${pixToRem(30)} ${pixToRem(20)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(8),
    gap: pixToRem(15),
    [theme.breakpoints.down("sm")]:{
      width:pixToMvw(300),
      height:"fit-content",
    },
  },
  title: {
    fontSize: pixToRem(35),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    color: "black",
    [theme.breakpoints.down("sm")]:{
      fontSize: pixToMvw(22),
    },
  },
  subtitle: {
    fontSize: pixToRem(15),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    color: "black",
    [theme.breakpoints.down("sm")]:{
      fontSize: pixToMvw(12),
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
      height: pixToMvw(30),
    },
  },
  inputText: {
    fontSize: pixToRem(14),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
    color: "#636363",
  },
  text: {
    width: "100%",
    fontSize: pixToRem(15),
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left",
    paddingLeft: pixToRem(11),
    color: "#0072b1",
    [theme.breakpoints.down("sm")]:{
      fontSize: pixToMvw(12),
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
      fontSize: pixToMvw(14),
      height: pixToMvw(50),      
      borderRadius: pixToMvw(25),
    },
  },
  image: {
    width: pixToVw(30),
    height: pixToVh(20),
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
      borderRadius: pixToMvw(25),
      height: pixToMvw(50),      
      fontSize: pixToMvw(14),
    },
  },
  errorText:{
    fontSize: pixToVw(18),
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    paddingLeft: pixToVw(11),
    color: "red",
    [theme.breakpoints.down("sm")]:{  
      fontSize: pixToMvw(14),
    },
  },
});
