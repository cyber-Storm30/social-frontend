import React from "react";
import { useStyles } from "./Styles";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <h1 className={classes.title}>social</h1>
        <div className={classes.search}>
          <SearchIcon className={classes.searchIcon} />
          <input className={classes.input} type="text" placeholder="Search " />
        </div>
      </div>
      <div className={classes.navbarRight}>
        <div className={classes.iconWrapper}>
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
      </div>
    </div>
  );
};

export default Navbar;
