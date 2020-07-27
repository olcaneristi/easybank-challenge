import React, { Component } from "react"
import Mockups from "./assets/images/image-mockups.png"

class Home extends Component {
  render() {
    return (
      <section class="hero">
        <div class="wrapper">
          <div class="hero__content">
            <div class="hero__description">
              <h1 class="title__h1">Next generation digital banking</h1>
              <p class="copy">
                Take your finalcial life online. Your Easybank account will be a
                one-stop-shop for spending. saving, budgeting, investing, and
                much more.
              </p>
              <button className="invitebtn" type="submit">
                Request Invite
              </button>
            </div>
            <div class="hero__image">
              <img loading="lazy" class="hero__imageSrc" src={Mockups} alt="" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home
