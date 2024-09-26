import React from "react";
import Link from "next/link";
function OfferSection() {
  return (
    <>
      <div className="offer-section pt-80 pb-80">
        <img
          src="assets/images/bg/web-top.svg"
          className="img-fluid web-top"
          alt="image"
        />
        <img
          src="assets/images/bg/web-bottom.svg"
          className="img-fluid web-bottom"
          alt="image"
        />
        <img
          src="assets/images/icons/triangle-icon.svg"
          className="img-fluid triangle-icon"
          alt="image"
        />
        <div className="container">
          <div className="row justify-content-center align-items-center gy-5">
            <div className="col-lg-7 order-lg-1 order-2">
              <div
                className="offer-content wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                <img src="assets/images/icons/service33.svg" alt="image" />
                <h3>
                  Special Discount For your frist Project Web Design
                  Development.
                </h3>
                <p className="para">
                  Lorem Ipsum is simply dummy text of free available in market
                  the way printing typesetting industry has been the
                  industrys standard dummy text ever.
                </p>
                <Link href="/service-details">
                  <div
                    className="eg-btn btn--primary3 btn--lg"
                    style={{ cursor: "pointer" }}
                  >
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="offer-image-area">
                <img
                  src="assets/images/bg/offer-bg.png"
                  className="img-fluid offer-bg"
                  alt="image"
                />
                <img
                  src="assets/images/icons/snake-arrow.svg"
                  className="img-fluid snake-arrow"
                  alt="image"
                />
                <div className="offer-ellipse">
                  <h4>
                    35% <br /> OFF
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferSection;
