import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import Topbar from "../../Components/Topbar/Topbar";
import axios from "axios";
import { useStyles } from "./Styles";

const Home = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data.data);
    };
    getPosts();
  }, [posts]);
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.homebody}>
        <Topbar />
        <>
          {posts?.map((post) => (
            <Post
              title={post.username}
              subtitle={post.title}
              time={post.createdAt}
              desc={post.body}
              likes={post.likes.length}
              comments={post.comments.length}
              image={post.image}
            />
          ))}
        </>
      </div>
    </div>
  );
};

export default Home;
