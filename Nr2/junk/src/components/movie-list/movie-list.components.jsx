import React, { useContext, useState } from "react";
import { StyledMovie } from "./movie-list.style";
import { Movie } from "../movie/movie.components";
import { MovieState } from "../movie.context/movie.context.components";

const MovieList = () => {
  const [movies, setMovies] = MovieState();

  //create the MovieState here so you export it later from
  // the main component const MovieState = () => useContext(MovieContext);
  // export { MovieProvider, MovieState };

  return (
    <StyledMovie>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </StyledMovie>
  );
};

export { MovieList, Movie };
