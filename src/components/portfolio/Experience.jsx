import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import style from "./Experience.module.css";

class Experience extends Component {
  render() {
    return (
      <div className={style.background}>
        <Container className={style.container}>
          <Row>
            <Col className={style.col}>
              <h1 className={style.heading}>Front-End</h1>
              <h3 className={style.subheading}>Languages</h3>
              <ul className={style.list}>
                <li>ReactJs</li> <li>Axios</li>
                <li> Javascript</li> <li>JQuery</li>
                <li> AJAX </li>
                <li>Bootstrap 4.x </li>
                <li> CSS3</li>
              </ul>
            </Col>
            <Col className={style.col2}>
              <h1 className={style.heading}>Back-End</h1>
              <h3 className={style.subheading}>Languages</h3>
              <ul className={style.list}>
                <li>T-SQL</li>
                <li>SQL Server 2016</li>
                <li>SSMS 2017</li>
                <li>Postman</li>
                <li>C#</li>
                <li>ASP.NET</li>
                <li>.NET Core 2.x</li>
                <li>Node.js</li>
              </ul>
            </Col>
            <Col className={style.col}>
              <h1 className={style.heading}>Other Skills</h1>
              <h3 className={style.subheading}>Dev Tools</h3>
              <ul className={style.list}>
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
