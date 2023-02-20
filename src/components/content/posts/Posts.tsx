import React from "react";

import "./Posts.css";

//import posts from "../../../data/posts/posts.json";
import posts from '../../data/posts/posts.json';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import Button from "../../button/Button";
import CommentIcon from '@mui/icons-material/Comment';

import ShareIcon from '@mui/icons-material/Share';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Video from "../../video/Video";




export default function Posts() {
  return (
    <div className="posts-wrapper">
      {posts.map((post, index) => (
        <div className="post">
          <div className="post-sidebar">
            <ArrowUpwardIcon className="upvote" /> 
             <span>{post.upvotes}</span> 
            {/* <span><Upvote/></span> */}
               <ArrowDownwardIcon className="downvote" />   
          </div>
          <div className="post-title">
            <img src={post.subreddit.image_src} />
            <span className="subreddit-name">r/{post.subreddit.name}</span>
            <span className="post-user">Posted by</span>
            <span className="post-user underline">u/{post.username}</span>
            <div className="spacer"></div>
            <Button label="+ JOIN" />
          </div>
           <div className="post-body">
            <span className="title">{post.title}</span>
            {post.video_src && <Video src={post.video_src} duration={post.duration} />}
           { post.image_src && <img src={post.image_src} />}
           { post.description && <span className="description">{post.description}</span>}
      </div>  
          <div className="post-footer">
            <div className="comments footer-action">
               <CommentIcon className="comment-icon" /> 
              <span>{post.comments} Comments</span>
            </div>
            <div className="share footer-action">
                 <ShareIcon />    
                < FindInPageIcon /> 
              <span>Share</span>
            </div>
            <div className="save footer-action">
                <BookmarkIcon />  
              <span>Save</span>
            </div>
          <MoreHorizIcon className="more-icon footer-action" /> 
          </div>
        </div>
      ))}
    </div>
  );
}