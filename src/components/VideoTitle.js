import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[10%] px-20 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-4">
        <button className=" text-black py-2 px-6 text-lg  bg-white rounded-lg hover:bg-opacity-75">
          Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-6 text-lg bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
