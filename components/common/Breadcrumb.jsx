import React from "react";
import Link from "next/link";
function Breadcrumb({ pageName, pageTitle, id }) {
  return (
    <>
      <div className="inner-banner">
        <img
          src="/assets/images/bg/inner-bannerdot.png"
          className="inner-bannerdot"
          alt="image"
        />
        <img
          src="assets/images/bg/inner-bannerwave.png"
          className="inner-bannerwave"
          alt="image"
        />
        <div className="down-arrow-icon" href={id}>
          <svg viewBox="0 0 14 26" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.8182 18.469L7.24862 25.7462L0.679032 18.469C0.272584 18.0188 0.592074 17.3 1.19862 17.3L6.74862 17.3L6.74862 1C6.74862 0.723857 6.97248 0.5 7.24862 0.5C7.52477 0.5 7.74862 0.723857 7.74862 1L7.74862 17.3L13.2986 17.3C13.9052 17.3 14.2247 18.0188 13.8182 18.469Z"
            />
          </svg>
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center text-center">
            <div className="col-md-6">
              <h2
                className="inner-banner-title wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".2s"
              >
                {pageTitle}
              </h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb gap-3">
                  <li className="breadcrumb-item">
                    <Link href="/team">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
