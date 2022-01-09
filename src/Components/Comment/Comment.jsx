import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

const Comment = ({ username, comment }) => {
  const classes = useStyles();
  return (
    <div className={classes.comment}>
      <Avatar className={classes.avatar} />
      <div className={classes.commentBody}>
        <p className={classes.title}>{username}</p>
        <p className={classes.subtitle}>{comment}</p>
      </div>
    </div>
  );
};

export default Comment;
