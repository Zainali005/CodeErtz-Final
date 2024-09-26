import Link from "next/link";
import React from "react";
import { recentPosts } from "../../data/index";
function BlogRecentPostWidget() {
  return (
    <>
      <div className="blog-widget-item">
        <div className="recent-blog">
          <h5 className="blog-widget-title">Recent Posts</h5>
          <div className="blog-widget-body">
            <ul className="recent-post-list">
              {recentPosts.map((list) => {
                return (
                  <li key={list.id}>
                    <Link
                      href="/blog-details"
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <div className="recent-post-item">
                        <div className="recent-post-img">
                          <img src={list.image} alt="image" />
                        </div>
                        <div className="recent-post-content">
                          <h6>{list.title}</h6>
                          <div className="meta">
                            <img
                              src="assets/images/icons/post-calendar.svg"
                              alt="image"
                            />
                            <p>{list.date}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogRecentPostWidget;
