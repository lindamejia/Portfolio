import React, { Component } from "react";
import style from "./AboutMe.module.css";
import picture from "./me.jpg";
import Linda from "./LindaMejia.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className={`container ${style.heading}`}>About Me</h1>

        <img src={Linda} alt="me" className={style.background} />

        <img src={picture} alt="me" className={style.image2} />

        <div className={`container col-md-3 col-xs-10 ${style.p}`}>
          <p>
            I’m a{" "}
            <span style={{ fontWeight: "bold" }}>front-end developer</span>,
            photography aficionado, lifelong learner, and a stereotype
            challenger.
          </p>
          <p>
            I love studying new technologies, traveling, watching Shark Tank,
            dog sitting for my friends, and cooking plant-based meals.
          </p>
          <p>
            I was born in Colombia, but I grew up in the US. I went to the{" "}
            <span style={{ fontWeight: "bold" }}>
              University of Connecticut{" "}
            </span>
            where I graduated with a B.S. in Business Management and a focus on
            digital marketing and analytics. I've also had the opportunity to
            study and work in France and Australia.
          </p>
          <p>
            Since beginning my journey as a{" "}
            <span style={{ fontWeight: "bold" }}>developer</span>, I've
            collaborated with talented and knowledgable people to create some
            pretty cool web apps. <br />
            <a href="/portfolio" className={style.link}>
              {" "}
              <span>
                Check out some of my work!<span className={style.arrow}>→</span>
              </span>
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default AboutMe;
