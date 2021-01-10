import React, { useState, createContext } from "react";

export const MovieContext = createContext();

const MovieProvider = (props) => {
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
    <div>
      <MovieContext.Provider>{props.children}</MovieContext.Provider>
    </div>
  );
};

export { MovieProvider };
