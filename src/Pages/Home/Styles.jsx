import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  home: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#ebebeb",
  },
  homebody: {
    display: "grid",
    placeItems: "center",
    paddingTop: "20px",
    gap: pixToRem(20),
    paddingBottom: pixToRem(50),
  },
});
