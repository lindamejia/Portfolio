import React, { Component } from "react";
import Experience from "./Experience";
import Websites from "./Websites";
import style from "./Portfolio.module.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1 className={style.portfolio}>Portfolio</h1>
        <Experience />
        <h1 className={style.heading}>My Recent Work</h1>
        <Websites />
      </div>
    );
  }
}

export default Portfolio;
