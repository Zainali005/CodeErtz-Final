import React from "react";
import Link from "next/link";
function Banner5() {
  return (
    <>
      <div className="banner-section5">
        <ul className="banner-social style-2 gap-4">
          <li>
            <Link href="https://www.facebook.com/">
              <i className="bx bxl-facebook" />
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com/">
              <i className="bx bxl-twitter" />
            </Link>
          </li>
          <li>
            <Link href="https://www.pinterest.com/">
              <i className="bx bxl-pinterest" />
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">
              <i className="bx bxl-instagram" />
            </Link>
          </li>
        </ul>
        <img
          src="assets/images/icons/banner5-tirang1.svg"
          className="banner5-tirang1 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/icons/banner5-tirang2.svg"
          className="banner5-tirang2 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/icons/banner5-tirang3.svg"
          className="banner5-tirang3 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/icons/banner5-tirang3.svg"
          className="banner5-tirang4 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/icons/banner5-tirang4.svg"
          className="banner5-tirang5 img-fluid"
          alt="image"
        />
        <img
          src="assets/images/bg/banner5-vector-left.png"
          className="banner5-vector-left img-fluid"
          alt="image"
        />
        <img
          src="assets/images/bg/banner5-vector.png"
          className="banner5-vector img-fluid"
          alt="image"
        />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div
                className="banner-content style-3 wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>Wellcome to Our Agency</span>
                <h1>Creative To Plan Your Business Company</h1>
                <p className="para">
                  Get the most of reduction in your team’s operating costs for
                  the whole product which creates amazing UI/UX experiences.
                </p>
                <div className="button-group gap-4">
                  <Link href="/about">
                    <div
                      className="eg-btn btn--primary5 capsule btn--lg"
                      style={{ cursor: "pointer" }}
                    >
                      Learn More
                    </div>
                  </Link>
                  <Link href="/contact">
                    <div
                      className="eg-btn btn--primary5 capsule btn--outline btn--lg"
                      style={{ cursor: "pointer" }}
                    >
                      Get In Touch
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 position-relative d-lg-block d-none">
              <div className="offer-image-area style-2">
                <img
                  src="assets/images/bg/banner5-image.png"
                  className="img-fluid banner5-image"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner5;
