import React, { Component } from "react";
import Experience from "./Experience";
import Websites from "./Websites";
import style from "./Portfolio.module.css";

class Portfolio extends Component {
  render() {
    return (
      <div className={style.background}>
        <h1 className={style.portfolio}>Portfolio</h1>

        {/* <Websites /> */}

        {/* <h1 className={style.heading}>My Recent Work</h1> */}

        <Experience />
      </div>
    );
  }
}

export default Portfolio;
