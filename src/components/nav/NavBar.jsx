import React, { Component } from "react";
import style from "./NavBar.module.css";
import whiteLogo from "./whiteLogo.png";
import logo from "./logo.png";

console.log(logo);

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "white",
      backgroundColor: "",
      logo: require("./whiteLogo.png")
    };

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({
        color: "black",
        backgroundColor: "white",
        logo: require("./logo.png")
      });
    } else {
      this.setState({
        color: "white",
        backgroundColor: "",
        logo: require("./whiteLogo.png")
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <div>
        <nav role="navigation" className={style.nav}>
          <div>
            <img src={this.state.logo} alt="Logo" className={style.img} />
          </div>
          <a
            href="/"
            className={style.navlink}
            style={{ color: this.state.color }}
          >
            HOME
          </a>
          <br className={style.br} />
          <a
            href="/aboutme"
            className={style.navlink}
            style={{ color: this.state.color }}
          >
            ABOUT ME
          </a>
          <br className={style.br} />
          <a
            href="/portfolio"
            className={style.navlink}
            style={{ color: this.state.color }}
          >
            PORTFOLIO
          </a>
          <br className={style.br} />
          <a
            href="/contact"
            className={style.navlink}
            style={{ color: this.state.color }}
          >
            CONTACT
          </a>
        </nav>
      </div>
    );
  }
}
export default NavBar;
