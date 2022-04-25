import { makeStyles } from "@mui/styles";
import { pixToMvh, pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints"

export const useStyles = makeStyles({
  post: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(530),
    padding: `${pixToRem(10)} ${pixToRem(15)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(7),
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(400),
     },
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: pixToRem(10),
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
    [theme.breakpoints.down("sm")]: {
      gap: pixToMvw(5),
     },
  },
  topRight: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(15),
  },
  profilePic: {
    width: pixToVw(45) + "!important",
    height: pixToVw(45) + "!important",
    cursor: "pointer !important",
    color: "gray",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(40) + "!important",
      height: pixToMvw(40) + "!important",
     },
  },
  userDetails:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
  },
  title: {
    fontSize: pixToRem(14),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(14),
     },
  },
  subtitle: {
    fontSize: pixToRem(12),
    color: "#141414 !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
     },
  },
  time: {
    fontSize: pixToRem(10),
    color: "#141414",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(8),
     },
  },
  body: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: pixToRem(10),
  },
  desc: {
    width: "100%",
    padding: `${pixToRem(10)} 0`,
    fontSize: pixToVw(20),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
     },
  },
  postImage: {
    width: "100%",
    height: pixToVh(400),
    objectFit: "cover",
    outline: "1px solid #cfcfcf",
    borderRadius: "7px",
  },
  likesAnComment: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: pixToRem(10),
    borderBottom: "1px solid #cccccc",
  },
  likes: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
  },
  likeIcon: {
    width: pixToVw(14) + "!important",
    height: pixToVw(14) + "!important",
    cursor: "pointer !important",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(16) + "!important",
      height: pixToMvw(16) + "!important",
     },
  },
  likesText: {
    fontSize: pixToRem(13),
    color: "#141414",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
     },
  },
  bottom: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  buttons: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    gap: pixToRem(50),
    justifyContent: "space-evenly",
    padding: `${pixToRem(12)} 0`,
  },
  bottomButton: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(2),
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      alignItems:"center",
      gap:pixToMvw(2),
     },
  },
  bottomIcon: {
    width: pixToVw(24) + "!important",
    height: pixToVw(24) + "!important",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(18) + "!important",
    height: pixToMvw(18) + "!important",
     },
  },
  buttonText: {
    fontSize: pixToRem(15),
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvh(8),
     },
  },
  commentSectionWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  commentSection: {
    display: "flex",
    width: "100%",
    gap: pixToRem(10),
    // backgroundColor:"Red",
    alignItems:"center",
  },

  commentIcon: {
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(18) + "!important",
      height: pixToMvw(18) + "!important",
     },
  },
  inputWrapper: {
    width:pixToVw(420),
    height:pixToVw(55),
    display: "flex",
    alignItems: "center",
    border: "1px solid #cccccc",
    padding: `0 ${pixToRem(22)}`,
    borderRadius: "25px",
    gap: pixToRem(10),
    [theme.breakpoints.down("sm")]: {
      width:pixToMvw(320),
      height:pixToMvw(45),
     },
  },
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
    borderRadius: "25px",
  },
  button: {
    width: pixToVw(75),
    height: pixToVh(30),
    outline: "none",
    border: "none",
    backgroundColor: "#0072b1",
    borderRadius: pixToRem(25),
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
    margin:pixToVw(10),
    [theme.breakpoints.down("sm")]: {
      width:pixToMvw(60),
      height:pixToMvw(35),
      borderRadius: pixToMvw(25),
      margin:pixToMvw(7),
     },
  },
  disButton: {
    display: "none",
  },
});
