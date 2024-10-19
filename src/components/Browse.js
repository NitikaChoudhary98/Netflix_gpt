import React from "react";
import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
  useNowPLayingMovies();
  usePopularMovies();
  return (
    <>
      <div className="bg-black">
        <Header />
        <MainContainer />
        <SecondaryContainer />
      </div>
    </>
  );
};

export default Browse;
