import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import { Divider, IconButton, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/Actions/modal";
import { useStyles } from "./Styles";
import { logout } from "../../redux/Actions/auth";

const UserModal = ({ open }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user.newUser);
  const [close, setClose] = useState(open);
  const [desc, setDesc] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };

  const handleClose = () => {
    setClose(false);
    dispatch(closeModal(close));
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    gap: pixToRem(10),
    position: "absolute",
    top: "25%",
    left: "73%",
    transform: "translate(-50%, -50%)",
    width: pixToVw(290),
    bgcolor: "background.paper",
    border: "none",
    outline: "none",
    borderRadius: 2,
    boxShadow: 24,
    p: 2,
    cursor: "pointer",
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-subtitle"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.top}>
            <div className={classes.wrapper}>
              <Avatar />
              <p
                className={classes.title}
              >{`${user.firstname} ${user.lastname}`}</p>
            </div>
            <button className={classes.button}>view your profile</button>
          </div>

          <Divider />
          <div className={classes.options}>
            <p className={classes.title}>Account</p>
            <p className={classes.subtitle}>Settings and Privacy</p>
            <p className={classes.subtitle}>Help</p>
            <p className={classes.subtitle}>Language</p>
          </div>
          <Divider />
          <div className={classes.options}>
            <p className={classes.title}>Account</p>
            <p className={classes.subtitle} onClick={handleLogout}>
              Logout
            </p>
            <p className={classes.subtitle}>Help</p>
            <p className={classes.subtitle}>Language</p>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default UserModal;