import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: " -6520$",
      id: 85,
    },
    {
      name: "gogo manu",
      price: " -6520$",
      id: 855,
    },
    {
      name: "tanta laul",
      price: " -6520$",
      id: 9851,
    },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} />
      ))}
    </div>
  );
};

export default MovieList;
