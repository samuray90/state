import React from "react";
import { MovieList } from "../movie-list/";
import { StyledAplication } from "./app.style";

const App = () => {
  return (
    // the MovieList has a MovieState which is in movie.context
    <StyledAplication>
      <MovieList />
    </StyledAplication>
  );
};

export { App };
