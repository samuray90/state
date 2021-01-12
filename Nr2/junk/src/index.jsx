import React from "react";
import { render } from "react-dom";
import { App } from "./components/app";
import { MovieProvider } from "./components/movie.context/movie.context.components";
import "./index.css";

const here = document.querySelector("#here");

const app = (
  <MovieProvider>
    <App />
  </MovieProvider>
);

render(app, here);

// your MovieProvider grabs the App in the JSX
