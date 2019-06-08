import React, { Component } from "react";
import style from "./NavBar2.module.css";
import whiteLogo from "./whiteLogo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        {" "}
        <a href="/">
          <img src={whiteLogo} alt="Logo" className={style.img} />
        </a>
        <div>
          <Navbar dark expand="md" fixed="top" className={style.nav}>
            {" "}
            <NavbarToggler
              onClick={this.toggle}
              class="primary navbar-toggler"
            />
            <Collapse
              isOpen={this.state.isOpen}
              className={style.collapse}
              navbar
            >
              <div className={style.background}>
                <Nav className={`${style.rotate} ml-auto`} navbar>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      to="/contact"
                      color="white"
                      className={style.navlink}
                    >
                      CONTACT
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/aboutme" className={style.navlink}>
                      ABOUT ME
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      tag={Link}
                      to="/portfolio"
                      className={style.navlink}
                    >
                      PORTFOLIO
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/" className={style.navlink}>
                      HOME
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </Collapse>
            {/* <NavbarBrand href="/" className="mt-auto">
           
          </NavbarBrand> */}
          </Navbar>
        </div>
      </div>
    );
  }
}
export default withRouter(NavBar);
