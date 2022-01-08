import React, { useState } from "react";
import { LightTooltip, useStyles } from "./Styles";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import { pixToRem, pixToVw } from "../../Utils/pixToRem";
import { Divider, IconButton, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EventIcon from "@mui/icons-material/Event";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import NotesIcon from "@mui/icons-material/Notes";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/Actions/modal";
import axios from "axios";

const Write = ({ open }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [close, setClose] = useState(open);
  const [desc, setDesc] = useState("");

  const handleClose = () => {
    setClose(false);
    dispatch(closeModal(close));
  };

  const handleSubmit = async () => {
    if (desc) {
      try {
        await axios.post("http://localhost:5000/api/posts/createpost", {
          username: `${user.firstname} ${user.lastname}`,
          userId: user.newUser._id,
          body: desc,
        });
        dispatch(closeModal(close));
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert("");
    }
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(10),
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: pixToVw(500),
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.top}>
            <h3>Create Post</h3>
            <ClearIcon onClick={handleClose} style={{ cursor: "pointer" }} />
          </div>
          <Divider />
          <div className={classes.userDetails}>
            <Avatar />
            <p>{`${user.firstname} ${user.lastname}`}</p>
          </div>
          <textarea
            className={classes.input}
            placeholder="Start writing your post"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className={classes.bottom}>
            <div className={classes.icons}>
              <LightTooltip title="Add a photo" placement="top">
                <IconButton>
                  <label htmlFor="photoInput">
                    <InsertPhotoIcon
                      color="action"
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </IconButton>
              </LightTooltip>
              <input type="file" id="photoInput" style={{ display: "none" }} />
              <LightTooltip title="Add a video" placement="top">
                <IconButton>
                  <label htmlFor="videoInput">
                    <PlayCircleIcon
                      color="action"
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                </IconButton>
              </LightTooltip>
              <input type="file" id="videoInput" style={{ display: "none" }} />
              <LightTooltip title="Add a document" placement="top">
                <IconButton>
                  <label htmlFor="documentInput">
                    <NotesIcon color="action" style={{ cursor: "pointer" }} />
                  </label>
                </IconButton>
              </LightTooltip>
              <input
                type="file"
                id="documentInput"
                style={{ display: "none" }}
              />
              <LightTooltip title="Add an event" placement="top">
                <IconButton>
                  <EventIcon color="action" style={{ cursor: "pointer" }} />
                </IconButton>
              </LightTooltip>
              <input type="file" id="photoInput" style={{ display: "none" }} />
              <LightTooltip title="Create a poll" placement="top">
                <IconButton>
                  <EqualizerIcon color="action" style={{ cursor: "pointer" }} />
                </IconButton>
              </LightTooltip>
            </div>
            <button
              className={
                desc ? classes.button : classes.button + ` ${classes.disButton}`
              }
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Write;
