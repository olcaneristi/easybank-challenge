import React, { Component } from "react"
import Logo2 from "./assets/images/white_logo.svg"
import Facebook from "./assets/images/icon-facebook.svg"
import Youtube from "./assets/images/icon-youtube.svg"
import Twitter from "./assets/images/icon-twitter.svg"
import Pinterest from "./assets/images/icon-pinterest.svg"
import Instagram from "./assets/images/icon-instagram.svg"

class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="/#" className="footer-logo">
              <img src={Logo2} alt="LogoLight" />
            </a>
            <div className="footer-icons">
              <a href="/#">
                <img src={Facebook} alt="facebook" />
                <img src={Youtube} alt="yutub" />
                <img src={Twitter} alt="twitta" />
                <img src={Pinterest} alt="pinta" />
                <img src={Instagram} alt="facebug" />
              </a>
            </div>
          </div>
          <nav className="footer-menu">
            <ul className="list1">
              <li>
                <a href="/#">About Us</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
              <li>
                <a href="/#">Blog</a>
              </li>
            </ul>
            <ul className="list2">
              <li>
                <a href="/#">Careers</a>
              </li>
              <li>
                <a href="/#">Support</a>
              </li>
              <li>
                <a href="/#">Privacy Policy</a>
              </li>
            </ul>
          </nav>
          <div className="footer-btn">
            <button className="invitebtn" type="submit">
              Request Invite
            </button>
            <p className="copyright">© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </section>
    )
  }
}
export default Footer
