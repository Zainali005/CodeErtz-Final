import Link from "next/link";
import React from "react";

function ShareBlogWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="follow-area">
          <h5 className="blog-widget-title mb-1">Follow Us</h5>
          <p className="para">Follow us on Social Network</p>
          <div className="blog-widget-body">
            <ul className="follow-list d-flex flex-row align-items-start gap-4">
              <li>
                <Link  href="https://www.facebook.com/">
                  <i className="bx bxl-facebook" />
                </Link>
              </li>
              <li>
                <Link  href="https://www.twitter.com/">
                  <i className="bx bxl-twitter" />
                </Link>
              </li>
              <li>
                <Link  href="https://www.instagram.com/">
                  <i className="bx bxl-instagram" />
                </Link>
              </li>
              <li>
                <Link  href="https://www.pinterest.com/">
                  <i className="bx bxl-pinterest" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShareBlogWidget;
