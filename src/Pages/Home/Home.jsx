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
  }, []);
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
                time={post.createdAt}
                desc={post.body}
                likes={post.likes}
                comments={post.comments.length}
                image={post.image}
                postId={post._id}
              />
            ))
            .reverse()}
        </>
      </div>
    </div>
  );
};

export default Home;
