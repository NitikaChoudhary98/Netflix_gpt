import MovieCard from "./MovieCard";
import "./MovieList.css";
const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll bg-black hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
