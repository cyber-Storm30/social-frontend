import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontFamily: "'Poppins', sans-serif",
  },
}));

export const useStyles = makeStyles({
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userDetails: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(8),
  },
  input: {
    paddingBottom: pixToRem(10),
    lineHeight: pixToRem(25),
    height: pixToVh(120),
    outline: "none",
    border: "none",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  icons: {
    display: "flex",
    gap: pixToRem(15),
  },
  button: {
    width: pixToVw(55),
    height: pixToVh(30),
    outline: "none",
    border: "none",
    backgroundColor: "#0072b1",
    borderRadius: pixToRem(25),
    color: "white",
    fontWeight: "500",
    cursor: "pointer",
  },
  disButton: {
    backgroundColor: "#adadad",
  },
});
