import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  loaderWrapper: {
    width: "100%",
    height: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    width: pixToVw(100) + "!important",
    height: pixToVw(100) + "!important",
  },
});
