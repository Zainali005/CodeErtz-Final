import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from "next/link";
function Banner1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="banner-section1">
        <ul className="banner-social gap-5">
          <li>
            <div
              href="https://www.twitter.com/codeertz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </div>
          </li>
          <li>
            <div
              href="https://www.facebook.com/codeertz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </div>
          </li>
          <li>
            <div
              href="https://www.instagram.com/codeertz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </div>
          </li>
        </ul>
        <img
          src="assets/images/bg/banner-rain.png"
          className="banner-rain"
          alt="images"
        />
        <img
          src="assets/images/bg/banner-spring1.png"
          className="banner-spring1"
          alt="images"
        />
        <img
          src="assets/images/bg/banner-spring2.png"
          className="banner-spring2"
          alt="images"
        />
        <img
          src="assets/images/bg/banner-spring3.png"
          className="banner-spring3"
          alt="images"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                className="banner-content wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span>Wellcome to Our Agency</span>
                <h1>Smart Ideas for your Brand are Here</h1>
                <p>
                  At <strong>CodeErtz</strong>, we specialize in transforming
                  innovative concepts into impactful branding solutions. Our
                  team of creative experts is dedicated to understanding your
                  unique needs and crafting personalized strategies that drive
                  success. Whether you&apos;re a startup seeking to make your
                  mark or an established business looking to refresh your brand,
                  we offer tailored services to help you achieve your goals.
                </p>

                <div className="button-group gap-5">
                  <Link href="/project">
                    <div className="eg-btn btn--primary btn--lg">Discover More</div>
                  </Link>
                  {/* <div
                    onClick={() => setOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="btn-with-vdo d-flex align-items-center gap-4"
                  >
                    <div className="video-play">
                      <div className="popup-youtube video-icon">
                        <i className="bx bx-play" />
                      </div>
                    </div>
                    <div className="video-btn">How it works</div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <div
                className="solar-vector-area wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <img
                  src="assets/images/bg/banner1-vector.png"
                  className="img-fluid banner1-v1"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default Banner1;
