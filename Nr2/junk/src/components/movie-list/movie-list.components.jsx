import React, { useState } from "react";
import { StyledMovie } from "./movie-list.style";
import { Movie } from "../movie/movie.components";

const MovieList = () => {
  return (
    <StyledMovie>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </StyledMovie>
  );
};

export { MovieList };
