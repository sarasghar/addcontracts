import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AddContract from "./AddContract/AddContract.js";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddContract></AddContract>
      </div>
    );
  }
}

export default App;
