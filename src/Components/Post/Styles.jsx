import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  post: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(530),
    padding: `${pixToRem(10)} ${pixToRem(15)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(7),
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  topLeft: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
  },
  profilePic: {
    width: pixToVw(45) + "!important",
    height: pixToVh(45) + "!important",
    cursor: "pointer !important",
    color: "gray",
  },
  title: {
    fontSize: pixToRem(14),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    fontSize: pixToRem(12),
    color: "#141414 !important",
  },
  time: {
    fontSize: pixToRem(10),
    color: "#141414",
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
  },
  postImage: {
    width: "100%",
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
    height: pixToVh(14) + "!important",
    cursor: "pointer !important",
  },
  likesText: {
    fontSize: pixToRem(13),
    color: "#141414",
    cursor: "pointer",
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
  },
  bottomIcon: {
    width: pixToVw(24) + "!important",
    height: pixToVh(24) + "!important",
  },
  buttonText: {
    fontSize: pixToRem(15),
  },
  commentSection: {
    display: "flex",
    width: "100%",
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
    gap: pixToRem(20),
  },
  input: {
    width: "100%",
    outline: "none",
    border: "none",
  },
});
