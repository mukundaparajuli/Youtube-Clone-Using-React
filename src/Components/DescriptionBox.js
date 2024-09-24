import React, { useState } from "react";

const DescriptionBox = ({ info }) => {
  const [showMore, setShowMore] = useState(false);

  // Destructuring necessary data from the info object
  const { snippet, statistics } = info || {};
  const { title, channelTitle, localized, publishedAt } = snippet || {};
  const { viewCount, likeCount } = statistics || {};

  return (
    <div className="mt-4 p-4 bg-slate-300 border-b border-gray-300 w-full rounded-md">
      {/* Video Title */}
      <h1 className="font-semibold text-2xl mb-2">{title}</h1>

      {/* Channel Info, Views, Likes, Published Date */}
      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
        <div>
          <span className="font-semibold text-gray-800">{channelTitle}</span>
          <span className="ml-2">
            {viewCount && `${parseInt(viewCount).toLocaleString()} views`}
          </span>
        </div>
        {/* <div>
          {likeCount && (
            <span className="mr-4">
              👍 {parseInt(likeCount).toLocaleString()} likes
            </span>
          )}
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div> */}
      </div>

      {/* Description with Show More/Less Toggle */}
      <div>
        <p className="text-gray-700 text-sm">
          {showMore
            ? localized?.description
            : localized?.description?.slice(0, 200)} {/* Adjust slice length as needed */}
          {localized?.description?.length > 200 && (
            <button
              onClick={() => setShowMore(!showMore)}
              className="ml-1 text-blue-600 hover:underline"
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
