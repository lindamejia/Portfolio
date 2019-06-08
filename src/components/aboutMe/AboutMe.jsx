import React, { Component } from "react";
import style from "./AboutMe.module.css";
// import picture from "./me.jpg";
import Linda from "./LindaMejia.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h1 className={`container ${style.heading}`}>About Me</h1>
        <div className="row">
          <img src={Linda} alt="me" className={style.image} />
        </div>
        {/* <img src={picture} alt="me" className={style.image2} /> */}
        <div className="row">
          <div className={`container col-md-4  col-xs-10 ${style.p}`}>
            <p>
              I’m a{" "}
              <span style={{ fontWeight: "bold" }}>full stack developer</span>,
              photography aficionado, problem solver, and a stereotype
              challenger.
            </p>
            <p>
              I love learning new technologies, traveling, watching Shark Tank,
              and dog sitting for my friends.
            </p>
            <p>
              I graduated from the{" "}
              <span style={{ fontWeight: "bold" }}>
                University of Connecticut{" "}
              </span>
              with a B.S. in Business Management and a focus on digital
              marketing and analytics. I've also had the opportunity to study
              and work in France and Australia.
            </p>
            <p>
              Since beginning my journey as a web developer, I've collaborated
              with talented and knowledgable people to create some pretty cool
              web apps. <br />
              <a href="/portfolio" className={style.link}>
                {" "}
                <span>
                  Check out some of my work!
                  <span className={style.arrow}>→</span>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
