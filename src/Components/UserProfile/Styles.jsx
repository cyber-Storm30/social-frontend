import { makeStyles } from "@mui/styles";
import { borderRadius } from "@mui/system";
import { pixToRem, pixToVw, pixToVh, pixToMvh, pixToMvw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints"

export const useStyles = makeStyles({
  userprofile: {
    width: pixToVw(1400),
    position: "relative",
    borderRadius: pixToVw(30),
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      borderRadius:0,
    },
  },
  top: {
    width: "100%",
    position: "relative",
  },
  backgroundImage: {
    width: "100%",
    height: pixToVh(258),
    objectFit: "cover",
    objectPosition: "middle",
    borderRadius: "30px 30px 0 0",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width:"100%",
      height:pixToMvh(100),
      borderRadius:0,
    },
  },
  editWrapper: {
    position: "absolute",
    zIndex: 1,
    top: pixToVh(20),
    right: pixToVw(20),
    cursor: "pointer",
  },
  edit: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(24) + "!important",
     
    },
  },
  profilePicWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: pixToVh(170),
    left: pixToVw(40),
    width: pixToVw(130),
    height: pixToVw(130),
    borderRadius: "50%",
    border: `${pixToRem(4)} solid white`,
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(100),
      height: pixToMvw(100),
      top: pixToMvh(40),
      left: pixToMvw(10),

    },
  },
  profilepic: {
    width: "100% !important",
    height: "100% !important",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "top",
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    paddingTop: pixToRem(60),
    paddingLeft: pixToRem(20),
  },
  title: {
    fontSize: pixToRem(25),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToRem(36),
    },
  },
  desc: {
    width: "70%",
    fontSize: pixToRem(16),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
  },
  followers: {
    paddingTop: pixToRem(10),
    fontSize: pixToRem(14),
    fontWeight: "500",
    color: "#0072b1",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToRem(20),
    },
  },
  buttons:{
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    gap:pixToVh(10),
    paddingLeft:pixToVw(15),
    paddingBottom:pixToVw(10),
    [theme.breakpoints.down("sm")]: {
      paddingTop:pixToMvw(10),
    },
  },
  userButton:{
    width:pixToVw(150),
    height:pixToVw(40),
    outline:"none",
    border:"1px solid #0072b1",
    borderRadius:pixToVw(10),
    backgroundColor: "#0072b1",
    fontFamily: "'Poppins', sans-serif",
    color:'#cce6ff',
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      width:pixToMvw(150),
      height:pixToMvw(40),
      borderRadius:pixToMvw(10),
    },
  },
  userButtonFollowed:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width:pixToVw(150),
    height:pixToVw(40),
    gap:pixToVw(5),
    outline:"none",
    border:"1px solid #e6e6e6",
    borderRadius:pixToVw(10),
    backgroundColor: "#e6e6e6",
    fontFamily: "'Poppins', sans-serif",
    color:'#737373',
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      width:pixToMvw(150),
      height:pixToMvw(40),
      borderRadius:pixToMvw(10),
    },
  }
});
