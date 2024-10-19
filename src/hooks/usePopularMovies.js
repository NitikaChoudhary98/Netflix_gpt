import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addpopularMovie } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=4",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addpopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
