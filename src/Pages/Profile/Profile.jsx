import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import UserProfile from "../../Components/UserProfile/UserProfile";
import Grid from "@mui/material/Grid";
import Post from "../../Components/Post/Post";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import {useAuth} from "../../Hooks/useAuth"
import { Navigate } from "react-router-dom";
import { axiosClient } from "../../Services/apiClient";

const Profile = () => {
  const classes = useStyles();
  const [user, setUser] = useState();
  const [followers, setFollowers] = useState();
  const [followings, setFollowings] = useState();
  const token = useSelector((state) => state.auth.token);
  const [userPosts, setUserPosts] = useState([]);
  const userId = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axiosClient.get(`/user/${userId.id}`)
        setUser(res.data);
        setFollowers(res.data.followers);
        setFollowings(res.data.followings);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const res = await axiosClient.get(
          `/posts?userId=${userId.id}`
        );
        setUserPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, []);
  
    

  if(useAuth() === false){
    return <Navigate to = "/" />
  }


  return (
    <div className={classes.profile}>
      <Navbar />
      <div className={classes.profileBody}>
        <UserProfile
          user={user}
          followers={followers}
          followings={followings}
        />
        <Divider styles={{ color: "black" }} />
        <div className={classes.headers}>
          <p className={classes.headerTags}>Posts</p>
          <p className={classes.headerTags}>Saved</p>
          <p className={classes.headerTags}>Tagged</p>
        </div>
        <div className={classes.userPosts}>
          {userPosts
            ?.map((post,id) => (
                <Post
                  key = {id}
                  title={post.username}
                  subtitle={post.title}
                  time={new Date(post.createdAt).toDateString()}
                  desc={post.body}
                  likes={post.likes}
                  comments={post.comments}
                  image={post.image}
                  postId={post._id}
                  postUserId={post.userId}
                />
            ))
            .reverse()}
         </div>
      </div>
    </div>
  );
};

export default Profile;
