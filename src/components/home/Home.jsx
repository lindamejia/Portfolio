import React, { Component } from "react";
import style from "./Home.module.css";
import linkedin from "../../linkedin.png";
import github from "../../github.png";

export default class Home extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.heading}>
          <h1 className={style.title1}>Hi,</h1>
          <br />
          <h1 className={style.title}>I'm Linda,</h1>
          <br />
          <h1 className={style.title}>web developer.</h1>
          <br />
        </div>
        <div className={style.subheading}>
          <h4 className={style.subtitle}>
            "Doing what you like is freedom. Liking what you do is happiness."
          </h4>
          <hr className={style.hr} />
        </div>
      </div>
    );
  }
}
