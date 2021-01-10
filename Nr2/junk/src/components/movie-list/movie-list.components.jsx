import React, { useState } from "react";
import { StyledMovie } from "./movie-list.style";
import { Movie } from "../movie/movie.components";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Super Man and The Silly Wonder Woman",
      price: " 54£",
      id: 21,
    },
    {
      name: "League Of Sheppards",
      price: " 54£",
      id: 81,
    },
    {
      name: "Mr Marin The Billionaire",
      price: " 54£",
      id: 21,
    },
  ]);

  return (
    <StyledMovie>
      {movies.map((movie) => (
        <Movie name={movie.name} value={movie.price} />
      ))}
    </StyledMovie>
  );
};

export { MovieList };
