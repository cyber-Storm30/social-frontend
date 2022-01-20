import React from "react";
import { useStyles } from "./Styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import CoverPic from "../../Assets/table.jpg";
import { Avatar } from "@mui/material";
import { pixToRem } from "../../Utils/pixToRem";

const UserProfile = ({ user, followers, followings }) => {
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
          src={!user?.coverpic ? CoverPic : user.coverpic}
          alt="background"
          className={classes.backgroundImage}
        />
        <div className={classes.profilePicWrapper}>
          <Avatar src={user?.image} className={classes.profilepic} />
        </div>
      </div>
      <div className={classes.bottom}>
        <p className={classes.title}>{`${user.firstname} ${user.lastname}`}</p>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          neque ipsa repellendus error dignissimos distinctio inventore dolores
        </p>
        <div style={{ display: "flex", gap: pixToRem(25) }}>
          <p className={classes.followers}>{followers?.length} followers</p>
          <p className={classes.followers}>{followings?.length} followings</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
