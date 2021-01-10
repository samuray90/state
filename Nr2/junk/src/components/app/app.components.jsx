import React from "react";
import { MovieList } from "../movie-list/";
import { MovieProvider } from "../movie.context";
import { StyledAplication } from "./app.style";

function App() {
  return (
    <MovieProvider>
      <StyledAplication>
        <MovieList />
      </StyledAplication>
    </MovieProvider>
  );
}

export { App };
