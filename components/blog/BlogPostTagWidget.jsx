import Link from "next/link";
import React from "react";

function BlogPostTagWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="post-tag">
          <h5 className="blog-widget-title">Post Tag</h5>
          <div className="blog-widget-body">
            <ul className="tag-list d-flex justify-content-start flex-wrap gap-4">
              <li>
                <Link href="#">Advertising</Link>
              </li>
              <li>
                <Link href="#">Website UI</Link>
              </li>
              <li>
                <Link href="#">Agency</Link>
              </li>
              <li>
                <Link href="#">Advertising</Link>
              </li>
              <li>
                <Link href="#">ui/Ux </Link>
              </li>
              <li>
                <Link href="#">Website UI</Link>
              </li>
              <li>
                <Link href="#">branding</Link>
              </li>
              <li>
                <Link href="#">agency branding</Link>
              </li>
              <li>
                <Link href="#">Website UI</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostTagWidget;
