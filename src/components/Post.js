
import React from "react";
import "./Post.css";
const Post = ({ post: { title, body,
blogImg, author }, index }) => {
return (
	<div className="post-container">
	<h1 className="heading">{title}</h1>
	<img className="image" src={blogImg} alt="post" />
	<p>{body}</p>
	<div className="info">	
		<h4>Written by: {author}</h4>
	</div>
	</div>
);
};

export default Post;
