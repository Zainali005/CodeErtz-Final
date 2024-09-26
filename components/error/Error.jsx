import Link from "next/link";
import React from "react";

function Error() {
  return (
    <>
      <div className="error-section pt-120 pb-120" id="error">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="error-wrap">
                <img
                  src="assets/images/bg/error-img.png"
                  className="img-fluid error-img"
                  alt="image"
                />
                <div className="content">
                  <h2>Sorry we can’t find that page</h2>
                  <p className="para mb-2">
                    The page you are looking for might have been removed had its
                    name changed <br /> or is temporarily unavailable.
                  </p>
                  <Link href="/">
                    <div className="eg-btn btn--primary btn--lg mt-4">
                      Back to Home
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
