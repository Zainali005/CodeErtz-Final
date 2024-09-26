import React from "react";
import Link from "next/link";
function Feature5() {
  return (
    <>
      <div className="feature-section5 position-relative overflow-hidden pb-120">
        <img
          src="assets/images/bg/dotted-bg.svg"
          alt="image"
          className="feature-dotted"
        />
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <div className="section-title3 style-2 primary4 text-start">
                <span>-Free Bonuss-</span>
                <h3>
                  We Provide Features For Your <br /> Business Website
                </h3>
              </div>
              <div className="feature2-content">
                <p className="para">
                  Korem Ipsum is simply dummy text of free available in market
                  the way printing and typesetting industry has been the
                  industrys standard dummy text ever.
                </p>
                <ul className="feature-list">
                  <li>
                    Orem Ipsum is simply dummy text of free available in market
                    the way printing and typesetting industry.
                  </li>
                </ul>
                <Link href="/service-details">
                  <div
                    className="eg-btn btn--primary5 capsule btn--md"
                    style={{ cursor: "pointer" }}
                  >
                    Get Started
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                  <div
                    className="service-item2 style-3 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.2s"
                  >
                    <div className="service-content">
                      <span className="sn">01</span>
                      <h4>Free Icon Plugin</h4>
                      <p>Nullam ullamcorper condisc Lurna eu accumsan.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                  <div
                    className="service-item2 style-3 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.4s"
                  >
                    <div className="service-content">
                      <span className="sn">02</span>
                      <h4>Web Security</h4>
                      <p>Nullam ullamcorper condisc Lurna eu accumsan.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                  <div
                    className="service-item2 style-3 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    <div className="service-content">
                      <span className="sn">03</span>
                      <h4>Creative Design</h4>
                      <p>Nullam ullamcorper condisc Lurna eu accumsan.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-10">
                  <div
                    className="service-item2 style-3 wow fadeInDown"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.8s"
                  >
                    <div className="service-content">
                      <span className="sn">04</span>
                      <h4>Content Writing</h4>
                      <p>Nullam ullamcorper condisc Lurna eu accumsan.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feature5;
