import React, { useState } from "react"
import Logo from "./assets/images/logo.svg"
import { IoMdClose, IoMdMenu } from "react-icons/io"

function Header() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <header>
      <a href="/#">
        <img src={Logo} alt="logo" />
      </a>
      <button type="button" className="sidebar-cta" onClick={showSidebar}>
        {sidebar ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <nav className={sidebar ? "navbar-menu active" : "navbar-menu"}>
        <ul className="nav_links" onClick={showSidebar}>
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

export default Header
