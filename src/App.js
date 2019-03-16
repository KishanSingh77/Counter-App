import React, { Component } from "react";
import "./App.css";
import Counters from "./Components/counters";

import Navbar from "./Components/navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
