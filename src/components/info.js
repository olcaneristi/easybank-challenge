import React, { Component } from "react"
import Online from "./assets/images/icon-online.svg"
import Budget from "./assets/images/icon-budgeting.svg"
import Onboard from "./assets/images/icon-onboarding.svg"
import API from "./assets/images/icon-api.svg"

class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="container">
          <h1>Why choose Easybank?</h1>
          <p className="easy-p">
            We leverage Open Banking to turn your bank account into your
            finatial hub. Control your finaces like never before.
          </p>
          <div className="grid">
            <div className="grid-item">
              <img
                loading="lazy"
                className="online"
                src={Online}
                alt="online"
              />
              <h2 className="info-title">Online Banking</h2>
              <p className="info-desc">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div className="grid-item">
              <img
                loading="lazy"
                className="budget"
                src={Budget}
                alt="budget"
              />
              <h2 className="info-title">Simple Budgeting</h2>
              <p className="info-desc">
                See exactly where your money goes each month. Receive
                notifications when you're close to hitting your limits.
              </p>
            </div>
            <div className="grid-item">
              <img
                loading="lazy"
                className="onboarding"
                src={Onboard}
                alt="onboarding"
              />
              <h2 className="info-title">Fast Onboarding</h2>
              <p className="info-desc">
                We dont't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div className="grid-item">
              <img loading="lazy" className="api" src={API} alt="Api" />
              <h2 className="info-title">Open API</h2>
              <p className="info-desc">
                Manage your saving, investments, pensions, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Info
