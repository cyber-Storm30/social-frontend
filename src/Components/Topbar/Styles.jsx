import { makeStyles } from "@mui/styles";
import { pixToMvh, pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints";

export const useStyles = makeStyles({
  topbar: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(530),
    padding: `${pixToRem(15)} ${pixToRem(15)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(7),
    gap: pixToRem(20),
    [theme.breakpoints.down("sm")]: {
     width:pixToMvw(400),
    },
  },
  top: {
    display: "flex",
    width: "100%",
    gap: pixToRem(10),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      gap:pixToMvw(5),
     },
  },
  commentIcon: {
    cursor: "pointer",
  },
  imputWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "1px solid #cccccc",
    padding: `0 ${pixToRem(10)}`,
    borderRadius: "25px",
    gap: pixToVw(20),
    [theme.breakpoints.down("sm")]: {
      padding: `0 ${pixToMvw(10)}`,
     },
  },
  input: {
    width: "100%",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${pixToVw(0)} ${pixToVw(10)}`,
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      padding: `${pixToMvw(0)} ${pixToMvw(0)}`,
      gap:pixToMvw(20),
     },
  },
  icon: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
     
     },
  },
  icons:{
    [theme.breakpoints.down("sm")]: {
     fontSize:pixToMvw(24) + "!important",
     },
  },
  iconText: {
    fontSize: pixToRem(14),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
     },
  },
  
});
