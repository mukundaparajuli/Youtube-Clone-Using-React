import React from "react";
import { comments } from "./CommentsConfig";
function Comment({ data }) {
  return (
    <div className="flex  rounded-lg bg-gray-100 m-4 shadow-md">
      <div className="w-48">
        <img
          className="h-8  self-center"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user "
        />
      </div>
      <div className="px-3">
        <p className="font-bold">{data.name}</p>
        <p className="text-justify ">{data.text}</p>
      </div>
    </div>
  );
}
const CommentList = ({ comments }) => (
  <div>
    {comments.map((comment, index) => (
      <div key={index}>
        <Comment key={index} data={comment} />
        <div className="ml-12 border-l-2">
          <CommentList key={index} comments={comment.replies} />
        </div>
      </div>
    ))}
  </div>
);

const CommentContainer = () => {
  return (
    <div className="w-[1000px] m-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentContainer;
