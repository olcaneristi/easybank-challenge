import React, { Component } from "react"
import Currency from "./assets/images/image-currency.jpg"
import Dinner from "./assets/images/image-restaurant.jpg"
import Plane from "./assets/images/image-plane.jpg"
import Confetti from "./assets/images/image-confetti.jpg"

class Article extends Component {
  render() {
    return (
      <section className="article">
        <div className="container">
          <h1 className="article-title">Latest Articles</h1>

          <div className="grid-article">
            <div className="grid-item-article">
              <img
                className="img-article"
                loading="lazy"
                height="200"
                src={Currency}
                alt="currency"
              />
              <div className="article-item">
                <h5 className="title_h5">By Claire Robinson</h5>
                <h3 className="title_h3">
                  Receive money in any currency with no fees
                </h3>
                <p className="article-desc">
                  The world is getting smaller and we’re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div className="grid-item-article">
              <img
                className="img-article"
                loading="lazy"
                height="200"
                src={Dinner}
                alt="restaurant"
              />
              <div className="article-item">
                <h5 className="title_h5">By Wilson Hutton</h5>
                <h3 className="title_h3">
                  Treat yourself without worrying about money
                </h3>
                <p className="article-desc">
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div className="grid-item-article">
              <img
                className="img-article"
                loading="lazy"
                height="200"
                src={Plane}
                alt="flight"
              />
              <div className="article-item">
                <h5 className="title_h5">By Wilson Hutton</h5>
                <h3 className="title_h3">
                  Take your Easybank card wherever you go
                </h3>
                <p className="article-desc">
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div className="grid-item-article">
              <img
                className="img-article"
                loading="lazy"
                height="200"
                src={Confetti}
                alt="holiday"
              />
              <div className="article-item">
                <h5 className="title_h5">By Claire Robinson</h5>
                <h3 className="title_h3">
                  Our invite-only Beta accounts are now live!
                </h3>
                <p className="article-desc">
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Article
