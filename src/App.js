import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Cars from "./Cars/Cars";
import FactsList from "./InterestingFacts/FactsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cars />
        <FactsList />
      </div>
    );
  }
}

export default App;
