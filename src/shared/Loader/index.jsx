import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useStyles } from "./Styles";

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress color="inherit" className={classes.loader} />
    </div>
  );
};

export default Loader;
