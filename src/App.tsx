import React from 'react';
import { Home } from './components/Home/Home';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About';
import { Masthead } from './components/Masthead';

export const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Home />
      {/* <About /> */}
      {/* <Masthead /> */}
    </div>
  );
};
