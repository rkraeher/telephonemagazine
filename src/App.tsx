import React from "react";
import { Home } from "./components/Home";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Home />
    </div>
  );
};
