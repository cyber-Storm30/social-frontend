import React, { useEffect, useState } from "react";
import { LightTooltip, useStyles } from "./Styles";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import {
  pixToMvh,
  pixToMvw,
  pixToRem,
  pixToVh,
  pixToVw,
} from "../../Utils/pixToRem";
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
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase/index";
import { axiosClient } from "../../Services/apiClient";
import { theme } from "../../Utils/breakpoints";

const Write = ({ open }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [close, setClose] = useState(false);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!desc) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [desc]);

  const handleClose = async () => {
    setClose(false);
    dispatch(closeModal(close));
  };

  const handleSubmit = async () => {
    const newPost = {
      username: `${user.firstname} ${user.lastname}`,
      userId: user._id,
      body: desc,
    };
    if (file && desc) {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      dispatch(closeModal(close));
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            try {
              axiosClient.post("/posts/createpost", {
                username: `${user.firstname} ${user.lastname}`,
                userId: user._id,
                body: desc,
                image: downloadURL,
              });
              setFile("");
              setDesc("");
            } catch (err) {
              window.alert("Unable to upload try again !!!");
            }
          });
        }
      );
    } else {
      dispatch(closeModal(close));
      try {
        await axiosClient.post("/posts/createpost", newPost);
      } catch (err) {
        window.alert("Unable to upload try again !!!");
      }
    }
  };
  return (
    <>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.modal}
      >
        <div className={classes.modalContent}>
          <div className={classes.top}>
            <h3 className={classes.heading}>Create Post</h3>
            <ClearIcon onClick={handleClose} className={classes.close} />
          </div>
          <Divider />
          <div className={classes.userDetails}>
            <Avatar className={classes.avatar} />
            <p
              className={classes.username}
            >{`${user.firstname} ${user.lastname}`}</p>
          </div>
          <textarea
            className={classes.input}
            placeholder="Start writing your post"
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className={classes.inputImageWrapper}>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                className={classes.inputImage}
              />
            )}
          </div>
          <div className={classes.bottom}>
            <div className={classes.icons}>
              <LightTooltip title="Add a photo" placement="top">
                <IconButton>
                  <label htmlFor="photoInput">
                    <InsertPhotoIcon
                      color="action"
                      style={{ cursor: "pointer" }}
                      className={classes.icon}
                    />
                  </label>
                </IconButton>
              </LightTooltip>
              <input
                type="file"
                id="photoInput"
                style={{ display: "none" }}
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
              <LightTooltip title="Add a video" placement="top">
                <IconButton>
                  <label htmlFor="videoInput">
                    <PlayCircleIcon
                      color="action"
                      style={{ cursor: "pointer" }}
                      className={classes.icon}
                    />
                  </label>
                </IconButton>
              </LightTooltip>
              <input type="file" id="videoInput" style={{ display: "none" }} />
              <LightTooltip title="Add a document" placement="top">
                <IconButton>
                  <label htmlFor="documentInput">
                    <NotesIcon
                      color="action"
                      style={{ cursor: "pointer" }}
                      className={classes.icon}
                    />
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
                  <EventIcon
                    color="action"
                    style={{ cursor: "pointer" }}
                    className={classes.icon}
                  />
                </IconButton>
              </LightTooltip>
              <input type="file" id="photoInput" style={{ display: "none" }} />
              <LightTooltip title="Create a poll" placement="top">
                <IconButton>
                  <EqualizerIcon
                    color="action"
                    style={{ cursor: "pointer" }}
                    className={classes.icon}
                  />
                </IconButton>
              </LightTooltip>
            </div>
            <button
              disabled={disabled}
              className={
                desc ? classes.button : classes.button + ` ${classes.disButton}`
              }
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Write;
