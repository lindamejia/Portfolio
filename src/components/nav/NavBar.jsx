import React, { Component } from "react";
import style from "./NavBar.module.css";
import whiteLogo from "./whiteLogo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav role="navigation" className={style.nav}>
            <a href="/">
              <img src={whiteLogo} alt="Logo" className={style.img} />
            </a>
            <div className={style.rotate}>
              <a href="/contact" className={style.navlink}>
                CONTACT
              </a>
              <a href="/aboutme" className={style.navlink}>
                ABOUT ME
              </a>
              <a href="/portfolio" className={style.navlink}>
                PORTFOLIO
              </a>
              <a href="/" className={style.navlink}>
                HOME
              </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
export default NavBar;
