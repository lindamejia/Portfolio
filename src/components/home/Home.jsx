import React, { Component, Fragment } from "react";
import style from "./Home.module.css";
import Particles from "react-particles-js";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      quote: {
        content: ""
      }
    };
    this.END_POINT =
      "https://cors-everywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    fetch(this.END_POINT, {
      method: "GET",
      // mode: "no-cors",
      header: {
        "Access-Control-Allow-Origin": "*"
      },
      credentials: "same-origin"
    })
      .then(response => response.json())
      .then(data => {
        if (data[0].content) {
          let { quote } = this.state;
          quote.content = data[0].content;

          this.setState({ quote });
        } else {
          return console.error("No quote has been found 404");
        }
      });
  };

  render() {
    const { content } = this.state.quote;
    return (
      <div className={style.wrapper}>
        <Particles
          className={style.particles}
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          }}
        />
        <div className={style.heading}>
          <h1 className={style.title1}>Hi,</h1>
          <br />
          <h1 className={style.title}>I'm Linda,</h1>
          <br />
          <h1 className={style.title}>web developer.</h1>
          <br />{" "}
        </div>
        <div className={style.contact}>
          <a rel="contact" href="/contact" className={style.button}>
            {" "}
            CONTACT ME{" "}
          </a>
        </div>
        <div className={`container ${style.subheading}`}>
          <h4 className={style.subtitle}>{content.replace(/<.*?>/gm, `"`)}</h4>
          <hr className={style.hr} />
        </div>
      </div>
    );
  }
}
