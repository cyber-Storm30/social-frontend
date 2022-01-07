import React from "react";
import { useStyles } from "./Styles";
import Navbar from "../../Components/Navbar/Navbar";

const Feed = () => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <Navbar />
    </div>
  );
};

export default Feed;
