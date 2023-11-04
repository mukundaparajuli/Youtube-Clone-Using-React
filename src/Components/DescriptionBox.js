import React from "react";
const DescriptionBox = ({info}) => {
  return <div>
    <h1 className="font-semibold text-2xl my-3">{info?.snippet?.title}</h1>
    <div>
        <p className="bg-slate-100 w-[1000px] my-2">{info?.snippet?.description}</p>
    </div>
  </div>;
};

export default DescriptionBox;
