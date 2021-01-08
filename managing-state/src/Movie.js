import React from "react";

const Movie = ({ name, price, key }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}</p>
      <h4>{key}</h4>
    </div>
  );
};

export default Movie;
