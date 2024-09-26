import Link from "next/link";
import React from "react";

function BlogSingleCard1({
  image,
  category,
  title,
  authorName,
  date,
  readTime,
  authorImage,
}) {
  return (
    <>
      <div
        className="sigle-blog-1 wow fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
      >
        <div className="blog-image">
          <img src={image} className="img-fluid" alt="image" />
        </div>
        <div className="blog-content hover-border1">
          <span>{category}</span>
          <h4>
            <Link href="blog-details">{title}</Link>
          </h4>
          <div className="blog-meta">
            <div className="author-img">
              <img src={authorImage} alt="image" />
            </div>
            <div className="designation">
              <h5>{authorName}</h5>
              <div className="date">
                {date}
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSingleCard1;
