import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVw, pixToVh } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  userprofile: {
    width: pixToVw(800),
    position: "relative",
    borderRadius: pixToRem(10),
    backgroundColor: "#FFFFFF",
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
    borderRadius: "10px 10px 0 0",
  },
  editWrapper: {
    position: "absolute",
    zIndex: 999,
    top: pixToVh(20),
    right: pixToVw(20),
    cursor: "pointer",
  },
  edit: {
    cursor: "pointer",
  },
  profilePicWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: pixToRem(150),
    left: pixToRem(40),
    width: pixToVw(160),
    height: pixToVh(160),
    borderRadius: "50%",
    border: `${pixToRem(4)} solid white`,
  },
  profilepic: {
    width: pixToVw(160),
    height: pixToVh(160),
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
  },
});
