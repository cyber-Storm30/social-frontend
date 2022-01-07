import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  topbar: {
    display: "flex",
    flexDirection: "column",
    width: pixToVw(530),
    padding: `${pixToRem(15)} ${pixToRem(15)}`,
    backgroundColor: "white",
    borderRadius: pixToRem(7),
    gap: pixToRem(20),
  },
  top: {
    display: "flex",
    width: "100%",
    gap: pixToRem(10),
    cursor: "pointer",
  },
  commentIcon: {
    cursor: "pointer",
  },
  imputWrapper: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    border: "1px solid #cccccc",
    padding: `0 ${pixToRem(10)}`,
    borderRadius: "25px",
    gap: pixToRem(20),
  },
  input: {
    width: "100%",
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    padding: `${pixToRem(0)} ${pixToRem(10)}`,
  },
  icon: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
    cursor: "pointer",
  },
  iconText: {
    fontSize: pixToRem(14),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
  },
});
