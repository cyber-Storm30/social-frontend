import React, { useState } from "react";
import { useStyles } from "./Styles";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/Actions/modal";

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const type = "USERMODAL";
  const user = useSelector((state) => state.auth.user);
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <h1
          className={classes.title}
          onClick={() => {
            navigate("/");
          }}
        >
          social
        </h1>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <input className={classes.input} type="text" placeholder="Search " />
        </div>
      </div>
      <div className={classes.navbarRight}>
        <div
          className={classes.iconWrapper}
          onClick={() => {
            navigate("/");
          }}
        >
          <HomeIcon className={classes.icons} />
          <p className={classes.iconText}>Home</p>
        </div>
        <div className={classes.iconWrapper}>
          <GroupAddIcon className={classes.icons} />
          <p className={classes.iconText}>Connect</p>
        </div>
        <div className={classes.iconWrapper}>
          <BusinessCenterIcon className={classes.icons} />
          <p className={classes.iconText}>Jobs</p>
        </div>
        <div className={classes.iconWrapper}>
          <MessageIcon className={classes.icons} />
          <p className={classes.iconText}>Messages</p>
        </div>
        <div className={classes.iconWrapper}>
          <NotificationsActiveIcon className={classes.icons} />
          <p className={classes.iconText}>Notification</p>
        </div>
        <div className={classes.iconWrapper}>
          <Avatar
            className={classes.icons}
            onClick={() => {
              if (!user) navigate("/register");
              else {
                setOpen(true);
                dispatch(openModal({ type: type, state: open }));
              }
            }}
          />
          {user ? (
            <p className={classes.iconText}>{user.firstname}</p>
          ) : (
            <p className={classes.iconText}>Login</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
