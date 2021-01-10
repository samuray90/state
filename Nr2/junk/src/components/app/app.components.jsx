import React from "react";
import { MovieList } from "../movie-list/";
import { StyledAplication } from "./app.style";
import {} from "../movie.context";
import { MovieProvider } from "../movie.context/movie.context.components";

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
