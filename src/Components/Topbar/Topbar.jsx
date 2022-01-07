import React, { useState } from "react";
import { useStyles } from "./Styles";
import Avatar from "@mui/material/Avatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EventIcon from "@mui/icons-material/Event";
import NotesIcon from "@mui/icons-material/Notes";
import Write from "../Write/Write";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/Actions/modal";

const Topbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const type = "WRITE";
  const handleOpen = () => {
    setOpen(true);
    dispatch(openModal({ type: type, state: open }));
  };
  return (
    <div className={classes.topbar}>
      <div className={classes.top}>
        <Avatar className={classes.profilePic} />
        <div className={classes.imputWrapper} onClick={handleOpen}>
          <input className={classes.input} placeholder="Start a post" />
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.icon}>
          <InsertPhotoIcon color="primary" />
          <p className={classes.iconText}>Photo</p>
        </div>
        <div className={classes.icon}>
          <PlayCircleIcon color="success" />
          <p className={classes.iconText}>Video</p>
        </div>
        <div className={classes.icon}>
          <EventIcon color="success" />
          <p className={classes.iconText}>Event</p>
        </div>
        <div className={classes.icon}>
          <NotesIcon color="success" />
          <p className={classes.iconText}>Write Article</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
