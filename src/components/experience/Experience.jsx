import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Experience.module.css";

class Experience extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className={style.col}>
              <h1>Front-End</h1>
              <h3>Languages</h3>
              <ul>
                <li>ReactJs</li> <li>Axios</li>
                <li> Javascript</li> <li>JQuery</li>
                <li> AJAX </li>
                <li>Bootstrap 4.x </li>
                <li> CSS3</li>
              </ul>
            </Col>
            <Col className={style.col}>
              <h1>Back-End</h1>
              <h3>Languages</h3>
              <ul>
                <li>ReactJs</li> <li>Axios</li>
                <li> Javascript</li> <li>JQuery</li>
                <li> AJAX </li>
                <li>Bootstrap 4.x </li>
                <li> CSS3</li>
              </ul>
            </Col>
            <Col className={style.col}>
              <h1>Additional Technical Skills</h1>
              <h3>Languages</h3>
              <ul>
                <li>Git</li>
                <li>Google Maps</li>
                <li>Facebook Graph API</li>
                <li>Agile/ Scrum Methodologies</li>
                <li>Visual Studio 2017</li>
                <li>TFS</li>
                <li>SEO</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Experience;
