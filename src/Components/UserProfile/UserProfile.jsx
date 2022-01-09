import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CoverPic from "../../Assets/table.jpg";
import ProfilePic from "../../Assets/1.jpg";

const UserProfile = ({ user, followers, updatedUser }) => {
  const classes = useStyles();
  return (
    <div className={classes.userprofile}>
      <div className={classes.editWrapper}>
        <label htmlFor="picinput">
          <CameraAltOutlinedIcon className={classes.edit} color="primary" />
        </label>
        <input type="file" id="picinput" style={{ display: "none" }} />
      </div>
      <div className={classes.top}>
        <img
          src={CoverPic}
          alt="background"
          className={classes.backgroundImage}
        />
        <div className={classes.profilePicWrapper}>
          <img src={ProfilePic} className={classes.profilepic} />
        </div>
      </div>
      <div className={classes.bottom}>
        <p className={classes.title}>{`${user.firstname} ${user.lastname}`}</p>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          neque ipsa repellendus error dignissimos distinctio inventore dolores
        </p>
        <p className={classes.followers}>{followers?.length} followers</p>
      </div>
    </div>
  );
};

export default UserProfile;
