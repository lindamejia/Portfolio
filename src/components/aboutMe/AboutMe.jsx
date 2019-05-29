import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./AboutMe.module.css";
import picture from "./me.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 className={style.heading}>About Me</h1>
          <div className={style.container}>
            <img src={picture} alt="me" className={style.image} />
            <div className={style.p}>
              <p>
                I’m a front-end developer, photography afficionado,
                self-proclaimed content creator, and a stereotype challenger. I
                love learning new technologies, traveling, watching Shark Tank,
                dog sitting for my friends, cooking plant based meals, and
                eating eveything I've made.{" "}
              </p>
              <p>
                I’m originally from Colombia, but I’ve worked and studied in the
                US, France and Australia. I have a B.S. in Business with a focus
                in digital marketing and analytics from the University of
                Connecticut. I can't wait to tap further into the tech industry
                and grow in this field, so excited for what's ahead!
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default AboutMe;
