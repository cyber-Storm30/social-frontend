import { makeStyles } from "@mui/styles";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import { theme } from "../../Utils/breakpoints";

export const useStyles = makeStyles({
  profile: {
    width: "100vw",
    height: "100%",
    backgroundColor: "#ebebeb",
  },
  profileBody: {
    display: "grid",
    placeItems: "center",
    paddingTop: "20px",
    gap: pixToRem(20),
    paddingBottom: pixToRem(50),
  },
  headers: {
    display: "flex",
    width:"100%",
    justifyContent: "center",
    gap: pixToRem(50),
  },
  headerTags: {
    fontSize: pixToRem(14),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    color: "#363636",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      fontSize: pixToMvw(12),
    },
  },
  userPosts: {
    display: "flex",
    width:"100%",
    height:"100%",
    flexWrap:"wrap",
    gap:pixToVw(100),
    alignItems:"flex-start",
    justifyContent:"center",
    [theme.breakpoints.down("sm")]: {
    
     },
  },
});
