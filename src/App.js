import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import AboutMe from "./components/aboutMe/AboutMe";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" render={props => <Home {...props} />} />
        <AboutMe />
        <Experience />
      </div>
    );
  }
}

export default App;
