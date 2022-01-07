import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  login: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ebebeb",
    height: "100vh",
    paddingTop: pixToRem(30),
    paddingLeft: pixToRem(50),
    overflowY: "hidden",
  },
  container: {
    width: "100%",
    height: "80vh",

    display: "grid",
    placeItems: "center",
  },
});
