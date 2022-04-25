import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import Topbar from "../../Components/Topbar/Topbar";
import { useStyles } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/Actions/post";
import { axiosClient } from "../../Services/apiClient";
import {useAuth} from "../../Hooks/useAuth"
import { Navigate } from "react-router-dom";


const Home = () => {
 
  const classes = useStyles();
  const dispatch = useDispatch();
  const [localPosts,setLocalPosts] = ([])
  const [posts,setPosts] = useState([])

 

  useEffect(() => {
   const getPosts = async()=>{
     const res = await axiosClient.get("/posts")
     setPosts(res.data.data)
   }
    getPosts();
  }, []);

  if(useAuth() === false){
    return <Navigate to = "/" />
  }

  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.homebody}>
        <Topbar />
        <>
          {posts
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
        </>
      </div>
    </div>
  );
};

export default Home;
