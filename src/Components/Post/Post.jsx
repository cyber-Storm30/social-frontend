import React, { useState } from "react";
import { useStyles } from "./Styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const Post = ({ title, subtitle, desc, image, likes, comments }) => {
  const classes = useStyles();
  const [showComment, setShowComment] = useState(false);
  const handleCommentShow = () => {
    setShowComment(!showComment);
  };
  return (
    <div className={classes.post}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <AccountCircleIcon className={classes.profilePic} />
          <div className={classes.userDetails}>
            <p className={classes.title}>{title}</p>
            <p className={classes.subtitle}>{subtitle}</p>
            <p className={classes.time}>16h. Edited</p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className={classes.body}>
        <p className={classes.desc}>{desc}</p>
        <img src={image} className={classes.postImage} />
        <div className={classes.likesAnComment}>
          <div className={classes.likes}>
            <ThumbUpIcon color="primary" className={classes.likeIcon} />
            <p className={classes.likesText}>{likes}</p>
          </div>
          <p className={classes.likesText}>{comments} comments</p>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.buttons}>
          <div className={classes.bottomButton}>
            <ThumbUpOutlinedIcon className={classes.bottomIcon} />
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
            <AccountCircleIcon className={classes.profilePic} />
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
