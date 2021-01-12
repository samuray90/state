import React from "react";
import { MovieList } from "../movie-list/";
import { StyledAplication } from "./app.style";
import { Nav } from "../nav/nav.components";
import { AddMovie } from "../addMovie";

const App = () => {
  return (
    // the MovieList has a MovieState which is in movie.context
    <StyledAplication>
      <MovieList />
      <Nav />
      <AddMovie />
    </StyledAplication>
  );
};

export { App };
