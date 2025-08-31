import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Officers from "./Pages/Officers";
import Events from "./Pages/Events";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/About" exact Component={About} />
          <Route path="/Officers" exact Component={Officers} />
          <Route path="/Events" exact Component={Events} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
