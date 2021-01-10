import React, { useContext } from "react";
import { StyledMovie } from "./movie-list.style";
import { Movie } from "../movie/movie.components";
import { MovieContext } from "../movie.context";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <StyledMovie>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </StyledMovie>
  );
};

export { MovieList, Movie };
