import React from "react";
import { MovieList } from "../movie-list";
import { MovieState } from "../movie.context/movie.context.components";
import { StyledGuy } from "./nav.style";

const Nav = () => {
  const [movies, setMovies] = MovieState(MovieList);
  return <StyledGuy> Movie Colection : {movies.length}</StyledGuy>;
};

// do the components folder, after make a constant which will use the MovieState declared before
// by calling the (MovieList), prettier will help to import as well and export your Nav(the constant)

export { Nav };
