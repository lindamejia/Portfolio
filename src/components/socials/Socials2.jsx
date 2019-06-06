import React, { Component } from "react";
import style from "./Socials.module.css";
import linkedin from "../../linkedinb.png";
import github from "../../githubb.png";

export default class Home extends Component {
  render() {
    return (
      <div className={style.socials}>
        <a href="https://www.linkedin.com/in/lindamejia/" target>
          <img src={linkedin} alt="linkedin" className={style.image} />{" "}
        </a>
        <a href="https://github.com/lindamejia">
          <img src={github} alt="github" className={style.image} />
        </a>
      </div>
    );
  }
}
