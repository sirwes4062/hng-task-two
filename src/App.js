import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";




const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="Contact" element={ <Contact /> } />
      </Routes>
    </React.Fragment>
  );
};

export default App;
