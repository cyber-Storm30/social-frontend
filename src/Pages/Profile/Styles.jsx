import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  profile: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ebebeb",
  },
  profileBody: {
    display: "grid",
    placeItems: "center",

    paddingTop: "20px",
    gap: pixToRem(20),
  },
});
