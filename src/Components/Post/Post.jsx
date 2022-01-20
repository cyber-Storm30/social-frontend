import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import axios from "axios";
import Comment from "../Comment/Comment";
import { pixToRem } from "../../Utils/pixToRem";
import DoneIcon from "@mui/icons-material/Done";
import { Divider, IconButton } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const Post = ({
  title,
  subtitle,
  desc,
  image,
  comments,
  time,
  likes,
  postId,
  postUserId,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState();
  const [localComments, setLocalComments] = useState([]);
  const [localComment, setLocalComment] = useState("");
  const [like, setLike] = useState(likes.length);
  const [followings, setFollowings] = useState();
  const [isfollowed, setIsFollowed] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.user._id);
  const [updatedUser, setUpdatedUser] = useState();

  const handleCommentShow = () => {
    setShowComment(!showComment);
  };

  useEffect(() => {
    setIsLiked(likes.includes(user._id));
  }, [user._id]);

  useEffect(() => {
    setIsFollowed(followings?.includes(postUserId));
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/${userId}`,
          { headers: { token: `Bearer ${token}` } }
        );
        setUpdatedUser(res.data);
        setFollowings(res.data.followings);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const handleLike = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${postId}/like`, {
        userId: user._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleSubmit = async () => {
    setLocalComments((prevState) => [...prevState, localComment]);
    try {
      await axios.put(`http://localhost:5000/api/posts/${postId}/comment`, {
        username: `${user.firstname} ${user.lastname}`,
        comment,
      });
      setComment("");
    } catch (err) {
      console.log(err);
    }
  };

  const showUserProfile = () => {
    navigate(`/profile/${postUserId}`);
  };

  return (
    <div className={classes.post}>
      <div style={{ width: "100%", display: "grid", placeItems: "flex-end" }}>
        <IconButton>
          <MoreHorizIcon style={{ cursor: "pointer" }} />
        </IconButton>
      </div>
      <Divider />
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <Avatar className={classes.profilePic} />
          <div className={classes.userDetails}>
            <p className={classes.title} onClick={showUserProfile}>
              {title}
            </p>
            <p className={classes.subtitle}>{subtitle}</p>
            <p className={classes.time}>{time}</p>
          </div>
        </div>
        {postUserId != user._id && (
          <div className={classes.topRight}>
            {!isfollowed ? (
              <button className={classes.followButton}>+ Follow</button>
            ) : (
              <button className={classes.unfollowButton}>
                <DoneIcon style={{ size: `${pixToRem(14)}!important` }} />
                Following
              </button>
            )}
          </div>
        )}
      </div>
      <div className={classes.body}>
        <p className={classes.desc}>{desc}</p>
        {image && <img src={image} className={classes.postImage} />}
        <div className={classes.likesAnComment}>
          <div className={classes.likes}>
            <ThumbUpIcon color="primary" className={classes.likeIcon} />
            <p className={classes.likesText}>{like}</p>
          </div>
          <p className={classes.likesText}>
            {comments.length + localComments.length} comments
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.buttons}>
          <div className={classes.bottomButton} onClick={handleLike}>
            {isLiked ? (
              <ThumbUpIcon className={classes.bottomIcon} color="primary" />
            ) : (
              <ThumbUpOutlinedIcon className={classes.bottomIcon} />
            )}
            <p className={classes.buttonText}>Like</p>
          </div>
          <div className={classes.bottomButton} onClick={handleCommentShow}>
            <ChatOutlinedIcon className={classes.bottomIcon} />
            <p className={classes.buttonText}>Comment</p>
          </div>
          <div className={classes.bottomButton}>
            <ShareOutlinedIcon className={classes.bottomIcon} />
            <p className={classes.buttonText}>Share</p>
          </div>
          <div className={classes.bottomButton}>
            <IosShareOutlinedIcon className={classes.bottomIcon} />
            <p className={classes.buttonText}>Send</p>
          </div>
        </div>
        {showComment && (
          <div className={classes.commentSectionWrapper}>
            <div className={classes.commentSection}>
              <Avatar className={classes.profilePic} />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  gap: pixToRem(10),
                }}
              >
                <div className={classes.imputWrapper}>
                  <input
                    className={classes.input}
                    placeholder="Add a comment"
                    onChange={(e) => {
                      setLocalComment(e.target.value);
                      setComment(e.target.value);
                    }}
                  />
                  <SentimentSatisfiedAltOutlinedIcon
                    className={classes.commentIcon}
                  />
                  <CollectionsOutlinedIcon className={classes.commentIcon} />
                </div>
                <button
                  className={
                    comment
                      ? classes.button
                      : classes.button + ` ${classes.disButton}`
                  }
                  onClick={handleSubmit}
                >
                  Post
                </button>
              </div>
            </div>
            <div>
              {localComments?.map((lcom) => (
                <Comment
                  username={`${user.firstname} ${user.lastname}`}
                  comment={lcom}
                />
              ))}
            </div>
            <div>
              {comments
                ?.map((com) => (
                  <Comment username={com.username} comment={com.comment} />
                ))
                .reverse()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
