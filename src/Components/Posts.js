import React from "react";
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";

const Posts = ({username, caption, imageUrl}) => {
 return (
  <div className="post">
   <div className="post_header">
    <Avatar className="post_avatar" alt="hashDev" src="" />

    <h3>{username} </h3>
   </div>
   <img
    className="post_image"
    src="https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-963x542.png"
   />

   <h4 className="post_text">
    <strong>{username}</strong>{caption}
   </h4>
  </div>
 );
};

export default Posts;
