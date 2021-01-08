import React, { useState, createContext } from "react";

export const MovieContext = createContext(); //like the useState

export const MovieProvider = (props) => {
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
  ]); // the function from line 3 ( like the useState) together with .Provider which is Movie.Provider
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  ); // value means
}; // props.children(proprietatile copiilor + copiii) is actualy what's wrapped between the MovieContext and Provider
