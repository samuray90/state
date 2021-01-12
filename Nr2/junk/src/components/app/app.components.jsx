import React from "react";
import { MovieList } from "../movie-list/";
import { StyledAplication } from "./app.style";
import { Nav } from "../nav/nav.components";

const App = () => {
  return (
    // the MovieList has a MovieState which is in movie.context
    <StyledAplication>
      <MovieList />
      <Nav />
    </StyledAplication>
  );
};

export { App };
