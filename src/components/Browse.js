import React from "react";
import Header from "./Header";
import useNowPLayingMovies from "../hooks/useNowPLayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  useNowPLayingMovies();
  return (
    <>
      <div>
        <Header />
        <MainContainer />
      </div>
    </>
  );
};

export default Browse;
