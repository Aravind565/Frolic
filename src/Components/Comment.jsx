import React from "react";
import Comments from "./Comments";

const Comment = (props) => {
  return (
    <div>
      {props.comment.map((comment, index) => (<Comments  key={index} {...comment}/>))}
    </div>
  );
};

export default Comment;
