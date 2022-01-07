import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  registerWrapper: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#ebebeb",
    height: "100vh",
    paddingTop: pixToRem(30),
  },
  register: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: pixToRem(25),
  },
  title: {
    fontSize: pixToRem(40),
    fontWeight: "500",
    color: "#4d4d4d",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    fontSize: pixToRem(20),
    fontWeight: "500",
    color: "#636363",
    fontFamily: "'Poppins', sans-serif",
  },
});
