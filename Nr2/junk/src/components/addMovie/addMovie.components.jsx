import React, { useState, useContext } from "react";
import { MovieList } from "../movie-list";
import { MovieState } from "../movie.context/movie.context.components";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = MovieState(MovieList);

  //again you need the state declared and exported earlier

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
  };
  return (
    // here you execute the constant
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Submit</button>
    </form>
  );
};

export { AddMovie };
