import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Super Man and The Silly Wonder Woman",
      price: "58654£",
      id: 8521,
    },
    {
      name: "League Of Sheppards",
      price: "554£",
      id: 81,
    },
    {
      name: "Mr Marin The Billionaire",
      price: "58654£",
      id: 8521,
    },
  ]);

  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export { MovieList };
