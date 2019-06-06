import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav/NavBar";
import Socials2 from "./components/socials/Socials2";
import Home from "./components/home/Home";
import AboutMe from "./components/aboutMe/AboutMe";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Socials2 />

        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/aboutme" render={props => <AboutMe {...props} />} />
        <Route
          exact
          path="/portfolio"
          render={props => <Portfolio {...props} />}
        />
        <Route exact path="/contact" render={props => <Contact {...props} />} />
      </div>
    );
  }
}

export default App;
