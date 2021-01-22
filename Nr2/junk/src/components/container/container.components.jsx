import React from "react";
import PropTypes from "prop-types";
import { Task } from "../task";

const Container = ({ title }) => {
  return (
    <div
      style={{
        maxWidth: "500px",
        minHeight: "300px",
        overflow: "auto",
        padding: "30px",
        border: "5px solid steelblue",
        margin: "30px auto",
        borderRadius: "15px",
      }}
      className="container"
    >
      <header style={{ display: "flex" }}>
        <h1>{title}</h1>
        <button
          style={{
            backgroundColor: "#36ecd4",
            borderStyle: "none",
            borderRadius: "5px",
            width: "65px",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </header>
      <Task />
    </div>
  );
};

Container.defaultProps = {
  title: "Tasks to do",
};

// Container.PropTypes = {
//   title: PropTypes.string,
// };

export { Container };
