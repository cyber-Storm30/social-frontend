import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  comment: {
    display: "flex",
    padding: pixToRem(10),
    gap: pixToRem(7),
  },
  avatar: {
    width: pixToVw(40) + "!important",
    height: pixToVh(40) + "!important",
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
  },
  subtitle: {
    fontSize: pixToRem(14),
    fontWeight: "300",
    fontFamily: "'Poppins', sans-serif",
  },
});
