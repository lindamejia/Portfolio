import React, { Component } from "react";
import style from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <div className={style.background}>
        <br />
        <h1 className={style.header}>Contact Me</h1>
        <div className="container-fluid">
          <form
            action="https://formspree.io/lindaisamarmejia@gmail.com"
            method="POST"
          >
            <div>
              <div className="row justify-content-center">
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Name: </label>
                  <br />
                  <input type="text" name="name" className={style.input} />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-offset-1 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Email: </label>
                  <br />
                  <input type="email" name="_replyto" className={style.input} />
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="col-md-3 col-offset-1 col-sm-11 col-xs-11"
                >
                  <label className={style.label}>Subject: </label>
                  <br />
                  <input type="text" name="subject" className={style.input} />
                </div>
              </div>{" "}
              <br />
              <div style={{ textAlign: "center" }} className="col-12">
                <label className={style.label}>Message: </label>
                <br />
                <textarea
                  type="text"
                  name="message"
                  className={style.textArea}
                />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                type="submit"
                value="SEND"
                style={{ textAlign: "center" }}
                className={style.button}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
