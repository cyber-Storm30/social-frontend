import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import Navbar from "../../Components/Navbar/Navbar";
import { useSelector } from "react-redux";
import axios from "axios";
import UserProfile from "../../Components/UserProfile/UserProfile";
import Grid from "@mui/material/Grid";
import Post from "../../Components/Post/Post";
import { Divider } from "@mui/material";

const Profile = () => {
  const classes = useStyles();
  const [updatedUser, setUpdatedUser] = useState();
  const user = useSelector((state) => state.auth.user);
  const [followers, setFollowers] = useState();
  const [followings, setFollowings] = useState();
  const token = useSelector((state) => state.auth.token);
  const [userPosts, setUserPosts] = useState([]);
  const userId = useSelector((state) => state.auth.user._id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/${userId}`,
          { headers: { token: `Bearer ${token}` } }
        );
        setUpdatedUser(res.data);
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
        const res = await axios.get(
          `http://localhost:5000/api/posts?userId=${user._id}`
        );
        setUserPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserPosts();
  }, []);

  return (
    <div className={classes.profile}>
      <Navbar />
      <div className={classes.profileBody}>
        <UserProfile
          user={user}
          followers={followers}
          updatedUser={updatedUser}
          followings={followings}
        />
        <Divider styles={{ color: "black" }} />
        <div className={classes.headers}>
          <p className={classes.headerTags}>Posts</p>
          <p className={classes.headerTags}>Saved</p>
          <p className={classes.headerTags}>Tagged</p>
        </div>
        <Grid container spacing={2} className={classes.userPosts}>
          {userPosts
            ?.map((post) => (
              <Grid item xs={4}>
                <Post
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
              </Grid>
            ))
            .reverse()}
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
