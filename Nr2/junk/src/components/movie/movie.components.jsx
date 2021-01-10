import React from "react";

const Movie = ({ name, price }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
};

export { Movie };
