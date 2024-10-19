import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addpopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addpopularMovie } =
  moviesSlice.actions;
export default moviesSlice.reducer;
