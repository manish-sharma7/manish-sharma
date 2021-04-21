import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
class Navbar extends Component {
  state = { isBarClicked: false };
  handleClick = () => {
    this.setState({ isBarClicked: !this.state.isBarClicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Manish Sharma</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.isBarClicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>
        <ul
          className={this.state.isBarClicked ? 'nav-menu active' : 'nav-menu'}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
