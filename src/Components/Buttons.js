import React from "react";

const Buttons = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 m-2 p-1 px-3 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
