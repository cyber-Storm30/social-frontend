import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import Topbar from "../../Components/Topbar/Topbar";
import { useStyles } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/Actions/post";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  useEffect(() => {
    dispatch(fetchPost());
  }, [posts]);
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.homebody}>
        <Topbar />
        <>
          {posts
            ?.map((post) => (
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
            ))
            .reverse()}
        </>
      </div>
    </div>
  );
};

export default Home;
