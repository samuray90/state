import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Johnny</h3>
      <p>My List of Movies:{movies.length}</p>
    </div>
  );
};

export default Nav;
