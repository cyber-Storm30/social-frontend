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

const Post = ({
  title,
  subtitle,
  desc,
  image,
  comments,
  time,
  likes,
  postId,
}) => {
  const classes = useStyles();
  const [showComment, setShowComment] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const [like, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const handleCommentShow = () => {
    setShowComment(!showComment);
  };
  console.log(likes);

  useEffect(() => {
    setIsLiked(likes.includes(user._id));
  }, [user._id]);

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

  return (
    <div className={classes.post}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <Avatar className={classes.profilePic} />
          <div className={classes.userDetails}>
            <p className={classes.title}>{title}</p>
            <p className={classes.subtitle}>{subtitle}</p>
            <p className={classes.time}>{time}</p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className={classes.body}>
        <p className={classes.desc}>{desc}</p>
        {image && <img src={image} className={classes.postImage} />}
        <div className={classes.likesAnComment}>
          <div className={classes.likes}>
            <ThumbUpIcon color="primary" className={classes.likeIcon} />
            <p className={classes.likesText}>{like}</p>
          </div>
          <p className={classes.likesText}>{comments} comments</p>
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
          <div className={classes.commentSection}>
            <Avatar className={classes.profilePic} />
            <div className={classes.imputWrapper}>
              <input className={classes.input} placeholder="Add a comment" />
              <SentimentSatisfiedAltOutlinedIcon
                className={classes.commentIcon}
              />
              <CollectionsOutlinedIcon className={classes.commentIcon} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
