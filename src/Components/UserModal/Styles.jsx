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
    flexDirection: "column",
    gap: pixToRem(7),
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: pixToRem(5),
  },
  title: {
    fontSize: pixToRem(18),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    fontSize: pixToRem(14),
    fontWeight: "400",
    fontFamily: "'Poppins', sans-serif",
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
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(7),
  },
});
