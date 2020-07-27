import React, { Component } from "react"
import Logo from "./assets/images/logo.svg"

class Header extends Component {
  render() {
    return (
      <header>
        <a href="/#">
          <img src={Logo} alt="logo" />
        </a>
        <nav>
          <ul className="nav_links">
            <li className="header-li">
              <a className="header-a" href="/#">
                Home
              </a>
            </li>
            <li className="header-li">
              <a className="header-a" href="/#">
                About
              </a>
            </li>
            <li className="header-li">
              <a className="header-a" href="/#">
                Contact
              </a>
            </li>
            <li className="header-li">
              <a className="header-a" href="/#">
                Blog
              </a>
            </li>
            <li className="header-li">
              <a className="header-a" href="/#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <button className="invitebtn" type="submit">
          Request Invite
        </button>
      </header>
    )
  }
}
export default Header
