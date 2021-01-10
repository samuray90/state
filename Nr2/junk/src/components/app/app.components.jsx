import React from "react";
import { MovieList } from "../movie-list/";
import { StyledAplication } from "./app.style";

function App() {
  return (
    <StyledAplication>
      <MovieList />
    </StyledAplication>
  );
}

export { App };
