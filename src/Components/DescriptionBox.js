import React from "react";
const DescriptionBox = ({ info }) => {
  return <div>
    <h1 className="font-semibold text-2xl my-3">{info?.snippet?.title}</h1>
    <div>
      {console.log(info?.snippet?.localized?.description)}
      <p className="">{info?.snippet?.localized?.description}</p>
    </div>
  </div>;
};

export default DescriptionBox;
