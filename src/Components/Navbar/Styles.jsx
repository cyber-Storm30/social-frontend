import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: pixToVh(60),
    boxShadow: " 0px 15px 15px 11px rgba(0,0,0,0.055)",
    backgroundColor: "white",
    paddingLeft: pixToRem(50),
    paddingRight: pixToRem(50),
    position: "sticky",
    top: 0,
    zIndex: 999,
  },
  title: {
    fontSize: pixToRem(40),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
  },
  navbarLeft: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(20),
    // backgroundColor: "blue",
  },
  categories: {
    display: "flex",
    gap: pixToRem(25),
    cursor: "pointer",
  },
  categoriesText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "'Poppins', sans-serif",
  },
  navbarRight: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(30),
  },
  search: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(15),
    width: pixToVw(300),
    paddingLeft: pixToRem(10),
    height: pixToVh(40),
    backgroundColor: "#F2F2F2",
  },
  searchIcon: {
    cursor: "pointer",
  },
  iconWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  iconText: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
  },
  icons: {
    width: pixToVw(30) + "!important",
    height: pixToVh(30) + "!important",
    cursor: "pointer !important",
    color: "gray",
    "&:hover": {
      color: "black",
    },
  },
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
    backgroundColor: "#F2F2F2",
  },
});
