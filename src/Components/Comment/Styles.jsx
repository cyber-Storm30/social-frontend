import { makeStyles } from "@mui/styles";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import {theme} from "../../Utils/breakpoints";

export const useStyles = makeStyles({
  comment: {
    display: "flex",
    padding: pixToRem(10),
    gap: pixToRem(7),
  },
  avatar: {
    width: pixToVw(40) + "!important",
    height: pixToVw(40) + "!important",
    [theme.breakpoints.down("sm")]: {
      width: pixToMvw(20) + "!important",
      height: pixToMvw(20) + "!important",
     },
  },
  commentBody: {
    display: "flex",
    gap: pixToRem(7),
    flexDirection: "column",
    backgroundColor: "#e3e3e3",
    padding: pixToRem(10),
  },
  title: {
    fontSize: pixToRem(16),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
     },
  },
  subtitle: {
    fontSize: pixToRem(14),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(10),
     },
  },
});
