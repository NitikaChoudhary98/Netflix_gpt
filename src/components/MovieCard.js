import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-60 mr-3 hover:w-64">
      <img
        alt="Movie Card"
        className="w-[100%]"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};
export default MovieCard;
