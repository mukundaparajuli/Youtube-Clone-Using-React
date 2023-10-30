import React from "react";

const Buttons = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 m-2 p-2 px-4 rounded-lg h-13 ">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
