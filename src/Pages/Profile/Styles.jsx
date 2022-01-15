import { makeStyles } from "@mui/styles";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";

export const useStyles = makeStyles({
  profile: {
    width: "100%",
    height: "100vh",
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
    width: pixToRem(1000),
    justifyContent: "center",
    gap: pixToRem(50),
  },
  headerTags: {
    fontSize: pixToRem(14),
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    color: "#363636",
    cursor: "pointer",
  },
  userPosts: {
    display: "flex",
    padding: `0 ${pixToRem(100)}`,
  },
});
