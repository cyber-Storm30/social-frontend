import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  home: {
    width: "100%",
    height: "100%",
  },
  homebody: {
    display: "grid",
    placeItems: "center",
    backgroundColor: "#ebebeb",
    paddingTop: "20px",
    gap: pixToRem(20),
  },
});
