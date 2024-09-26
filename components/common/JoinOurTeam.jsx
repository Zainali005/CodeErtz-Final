import Link from "next/link";
import React from "react";

function JoinOurTeam({ btnclass }) {
  return (
    <>
      <div className="join-section pb-120">
        <div className="container">
          <div
            className="joinus-area d-flex align-items-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className="row d-flex align-items-center g-4">
              <div className="col-lg-7 justify-content-lg-start justify-content-center text-lg-start text-center">
                <h2>Were Always Looking For Talented People Our Agency.</h2>
              </div>
              <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center">
                <Link href="/contact">
                  <div
                    className={`${"eg-btn capsule joinus-btn"} ${btnclass}`}
                    style={{ cursor: "pointer" }}
                  >
                    Join Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinOurTeam;
