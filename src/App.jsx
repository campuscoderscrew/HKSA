import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" exact Component={About} />
          <Route path="/Events" exact Component={Events} />
          <Route path="/Gallery" exact Component={Gallery} /> 
          <Route path="/Events/:year" Component={Events} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
