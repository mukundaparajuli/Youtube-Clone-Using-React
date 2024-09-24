import React from "react";

const ChatMessage = ({ name, message }) => {

  return (
    <div className="flex items-center shadow-md my-2 w-full">
      <img
        className="h-5 m-0 col-span-2 self-center"
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="user "
      />
      <h1 className="font-bold mr-2">{name}</h1>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
