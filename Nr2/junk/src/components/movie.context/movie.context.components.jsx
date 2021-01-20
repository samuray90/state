import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();

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
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
const MovieState = () => useContext(MovieContext);
export { MovieProvider, MovieState };
// the State here exists but you need to push it trough the constant so it can be used everywhere
// here you make the const with the MovieState from the other component make a function with it to get useContext(MovieContext) and call with it the MovieContext
