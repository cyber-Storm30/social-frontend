import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { pixToMvh, pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {theme} from "../../Utils/breakpoints";

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontFamily: "'Poppins', sans-serif",
  },
}));

export const useStyles = makeStyles({
  modal:{
    position: "absolute",
    zIndex: 11,
    top: pixToVw(150) + "!important",
    left: pixToVw(630) + "!important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white",
    width: pixToVw(650),
    height: pixToVw(400),
    borderRadius: pixToVw(24),
    background: "blur(10px)",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(400),
      height: pixToMvw(450),
      top: pixToMvh(100) + "!important",
      left: pixToMvw(40) + "!important",
     },
  },
  modalContent:{
    display: "flex",
    flexDirection: "column",
    background: "#FFFF",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: pixToRem(24),
    padding: pixToRem(30) + " " + pixToRem(60),
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,.2)",
    [theme.breakpoints.down("sm")]: {
    },
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading:{
    fontWeight:"600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(16),
     },
  },
  userDetails: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(8),
    paddingTop:pixToRem(15),
  },
  username:{
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(12),
     },
  },
  input: {
    width:"100%",
    paddingBottom: pixToVh(10),
    lineHeight: pixToVh(25),
    height: pixToVh(120),
    outline: "none",
    border: "none",
    paddingTop:pixToRem(10),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: pixToMvh(10),
      lineHeight: pixToMvh(25),
      height: pixToMvh(120),
     },
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems:"center",
    [theme.breakpoints.down("sm")]: {
     },
  },
  icons: {
    display: "flex",
    gap: pixToRem(15),
  },
  button: {
    width: pixToVw(70),
    height: pixToVw(30),
    outline: "none",
    border: "none",
    backgroundColor: "#0072b1",
    borderRadius: pixToRem(25),
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(55),
      height: pixToMvw(30),
      borderRadius: pixToMvw(25),
     },
  },
  disButton: {
    backgroundColor: "#adadad",
  },
  avatar:{
    [theme.breakpoints.down("sm")]: {
     width:pixToMvw(40) + "!important",
     height:pixToMvw(40) + "!important",
     },
  },
  icon:{
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(20) + "!important",
     },
  },
  inputImageWrapper:{
    width:"100%",
    height:"100%",
    [theme.breakpoints.down("sm")]: {
     height:"200px",
    },
  },
  inputImage:{
    width:"100%",
    height:"100%",
    
  },
  close:{
    fontSize:pixToVw(24) + "!important",
    cursor:"pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(18) + "!important",
     },
  }
});
