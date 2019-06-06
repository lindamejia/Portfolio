import React, { Component } from "react";
import maca from "./maca.png";
import outlayr from "./outlayr.png";
import crowley from "./crowley.png";
import style from "./Websites.module.css";

class Websites extends Component {
  render() {
    return (
      <div className={` ${style.container} container`}>
        <div className="row">
          <div className={`col-md-3 col-xs-10 ${style.box}`}>
            <a href="https://www.crowleystrategy.com/" target="_blank">
              <img src={crowley} alt="crowley" className={style.image} />
              <div className={style.overlay}>
                <div className={style.text}>
                  Crowley Corporate Legal Strategy
                </div>
              </div>
            </a>
          </div>
          <div className={`col-md-3 col-xs-10 offset-1 ${style.box}`}>
            <a href="https://outlayr.azurewebsites.net/" target="_blank">
              <img src={outlayr} alt="outlayr" className={style.image} />
              <div className={style.overlay}>
                <div className={style.text}>Outlayr</div>
              </div>
            </a>
          </div>
          <div className={`col-md-3 col-xs-10 offset-1 ${style.box}`}>
            <a href="/maca" target="_blank">
              <img src={maca} alt="maca" className={style.image} />
              <div className={style.overlay}>
                <div className={style.text}>Maca Media</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Websites;
