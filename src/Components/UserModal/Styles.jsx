import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {theme} from "../../Utils/breakpoints";

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
    flexDirection: "column",
    gap: pixToRem(7),
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
  },
  avatar:{
    [theme.breakpoints.down("sm")]: {
      width:pixToMvw(30) + "!important",
      height:pixToMvw(30) + "!important",
     },
  },
  title: {
    fontSize: pixToRem(18),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(16),
     },
  },
  subtitle: {
    fontSize: pixToRem(14),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(12),
     },
  },
  button: {
    width: "100%",
    outline: "none",
    border: "1px solid #0072b1",
    color: "#0072b1",
    backgroundColor: "white",
    height: pixToVh(30),
    borderRadius: 25,
    cursor: "pointer",
    fontSize: pixToRem(15),
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
    "&:hover": {
      border: "2px solid #0072b1",
      backgroundColor: "#dbf2ff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize:pixToMvw(12),
     },
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(7),
  },
});
