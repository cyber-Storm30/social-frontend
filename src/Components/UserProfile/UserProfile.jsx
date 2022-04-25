import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import EditIcon from '@mui/icons-material/Edit';
import CoverPic from "../../Assets/table.jpg";
import { Avatar } from "@mui/material";
import { pixToMvw, pixToRem, pixToVh, pixToVw } from "../../Utils/pixToRem";
import { padding } from "@mui/system";
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from "react-redux";
import {axiosClient} from "../../Services/apiClient";
import { theme } from "../../Utils/breakpoints";

const UserProfile = ({ user, followers, followings }) => {
  const classes = useStyles();
  const [followed,setFollowed] = useState(false);
  const [show,setShow]=useState(false)
  const loggedInUser = useSelector((state)=>state.auth.user)._id
  const userId = user?._id;
  
  useEffect(()=>{
    if(loggedInUser === userId ){
      setShow(false)
    }
    else{
      setShow(true)
    }
  },[loggedInUser,userId])

  useEffect(()=>{
    if(followers?.includes(loggedInUser)){
      setFollowed(true)
    }
  },[followers])


  const handleFollowUnfollow = async()=>{
    try{
       const res = await axiosClient.put(`/user/${userId}/followUnfollow`,{
         userId:loggedInUser
       })
       if(res.data === "user has been followed"){
         setFollowed(true)
       }
       else {
         setFollowed(false)
       }
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className={classes.userprofile}>
      <div className={classes.editWrapper}>
        <label htmlFor="picinput">
          <EditIcon className={classes.edit} color="primary" />
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
      {show && <div className={classes.buttons}>
       { !followed?<button className = {classes.userButton} onClick = {handleFollowUnfollow}>Follow</button>
        :<button className = {classes.userButtonFollowed} onClick = {handleFollowUnfollow}><DoneIcon sx = {{fontSize:pixToVw(20),[theme.breakpoints.down("sm")]: {
         fontSize:pixToMvw(18),
        },}}/>Followed</button>}
        <button className = {classes.userButton} >Message</button>
      </div>}
        <p className={classes.title}>{`${user?.firstname} ${user?.lastname}`}</p>
        {/* <p className={classes.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          neque ipsa repellendus error dignissimos distinctio inventore dolores
        </p> */}
        <div style={{ display: "flex", gap: pixToRem(25),paddingBottom:pixToVh(20)}}>
          <p className={classes.followers}>{followers?.length} followers</p>
          <p className={classes.followers}>{followings?.length} followings</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
