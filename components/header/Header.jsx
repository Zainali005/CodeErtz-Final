import React, { useEffect, useReducer, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

/*---------Using reducer mange the active or inactive menu----------*/
const initialState = { activeMenu: "" };

function reducer(state, action) {
  switch (action.type) {
    case "homeOne":
      return { activeMenu: "homeOne" };
    case "service":
      return { activeMenu: "service" };
    case "project":
      return { activeMenu: "project" };
    case "blog_grid":
      return { activeMenu: "blog_grid" };
    // case "blog":
    //   return { activeMenu: "blog" };
    // case "Blog_standard":
    //   return { activeMenu: "Blog_Standard" };
    case "pages":
      return { activeMenu: "pages" };
    case "contact":
      alert("hdja");

      return { activeMenu: "contact" };
    default:
      return { activeMenu: "" };
  }
}
function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*----for single sidebar event use one state-------*/
  const [sidebar, setSidebar] = useState(false);
  const [showSearch, setshowSearch] = useState(false);
  const [showMobileMenu, setMobileMenu] = useState(false);
  const [showMobileSubMenu, setMobileSubMenu] = useState(false);

  const currentRoute = useRouter().pathname;
  const handleMobileSubMenu = () => {
    if (showMobileSubMenu === false || showMobileSubMenu === 0) {
      setMobileSubMenu(1);
    } else {
      setMobileSubMenu(false);
    }
  };

  const handleMobileMenu = () => {
    if (showMobileMenu === false || showMobileMenu === 0) {
      setMobileMenu(1);
    } else {
      setMobileMenu(false);
    }
  };
  const showSidebarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };

  const handleSearchbarBtn = () => {
    if (showSearch === false || showSearch === 0) {
      setshowSearch(1);
    } else {
      setshowSearch(false);
    }
  };
  /*----------- Method that will fix header after a specific scrollable -----------*/
  const isSticky = (e) => {
    const header = document.querySelector(".header-area");
    const scrollTop = window.scrollY;
    scrollTop >= 20
      ? header?.classList.add("sticky")
      : header?.classList.remove("sticky");
  };
  /*-----------Sticky Menu Area-----------*/
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  return (
    <>
      <div
        className={
          sidebar === 1
            ? "menu-toggle-btn-full-shape show-sidebar"
            : "menu-toggle-btn-full-shape"
        }
      >
        <div className="menu-toggle-wrap bg-white">
          <div className="sidebar-top-area d-flex justify-content-between align-items-center">
            <div className="sidebar-logo px-4 py-3 rounded">
              <Link href="#">
                <img src="/assets/images/icons/sidebar-logo.svg" alt="image" />
              </Link>
            </div>
            <div className="cross-icon" onClick={showSidebarMenu}>
              <i className="bx bx-x" />
            </div>
          </div>
          <div className="sidebar-body">
            <div className="address-card mb-5">
              <div className="content">
                <div className="header">
                  <div className="location">
                    <svg
                      width={18}
                      height={22}
                      viewBox="0 0 18 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 22C9 22 17.25 14.1818 17.25 8.25C17.25 6.06196 16.3808 3.96354 14.8336 2.41637C13.2865 0.869194 11.188 0 9 0C6.81196 0 4.71354 0.869194 3.16637 2.41637C1.61919 3.96354 0.75 6.06196 0.75 8.25C0.75 14.1818 9 22 9 22ZM9 12.375C7.90598 12.375 6.85677 11.9404 6.08318 11.1668C5.3096 10.3932 4.875 9.34402 4.875 8.25C4.875 7.15598 5.3096 6.10677 6.08318 5.33318C6.85677 4.5596 7.90598 4.125 9 4.125C10.094 4.125 11.1432 4.5596 11.9168 5.33318C12.6904 6.10677 13.125 7.15598 13.125 8.25C13.125 9.34402 12.6904 10.3932 11.9168 11.1668C11.1432 11.9404 10.094 12.375 9 12.375Z" />
                    </svg>
                  </div>
                  <h3>Pakistan</h3>
                </div>
                <ul className="address-list">
                  <li>
                    <span>Address:</span> Defence Avenue Mall, DHA 1 , Islamabad
                  </li>
                  <li>
                    <Link href="tel:+92149709315">+92314 9709315</Link>
                  </li>
                  <li>
                    <span>Email:</span>
                    <Link href="mailto:info@codeertz.com">
                      info@codeertz.com
                    </Link>
                  </li>
                </ul>
              </div>
              <img src="/assets/images/bg/office1.png" alt="image" />
            </div>
            <div className="blog-widget-item mb-0">
              <div className="follow-area">
                <h5 className="blog-widget-title mb-1">Follow Us</h5>
                <p className="para">Follow us on Social Network</p>
                <div className="blog-widget-body">
                  <ul className="follow-list d-flex flex-row align-items-start gap-4">
                    <li>
                      <Link href="https://www.facebook.com">
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.twitter.com">
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/">
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.pinterest.com">
                        <i className="bx bxl-pinterest" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={showSearch === 1 ? "mobile-search slide" : "mobile-search"}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center gap-2">
              <div className="search-cross-btn">
                <i className="bx bx-search-alt-2" />
              </div>
              <div className="search-cross-btn" onClick={handleSearchbarBtn}>
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <header
        className={
          currentRoute === "/"
            ? "header-area style-1"
            : currentRoute === "/index2"
            ? "header-area style-2"
            : currentRoute === "/index3"
            ? "header-area style-1 style-3"
            : currentRoute === "/index4"
            ? "header-area style-4"
            : currentRoute === "/index5"
            ? "header-area style-4 style-5"
            : "header-area style-1"
        }
      >
        <div className="header-logo">
          <Link href="/ ">
            <img
              alt="image"
              src={
                currentRoute === "/"
                  ? "/assets/images/icons/header1-logo.svg"
                  : currentRoute === "/index2"
                  ? "/assets/images/icons/header2-logo.svg"
                  : currentRoute === "/index3"
                  ? "/assets/images/icons/header3-logo.svg"
                  : currentRoute === "/index4"
                  ? "/assets/images/icons/header4-logo.svg"
                  : currentRoute === "/index5"
                  ? "/assets/images/icons/header5-logo.svg"
                  : "/assets/images/icons/header1-logo.svg"
              }
            />
          </Link>
        </div>
        <div
          className={showMobileMenu === 1 ? "main-nav show-menu" : "main-nav"}
        >
          <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
            <div className="mobile-logo-wrap ">
              <Link href="/ ">
                <img
                  alt="image"
                  style={{ width: "200px", height: "auto" }}
                  src={
                    currentRoute === "/"
                      ? "/assets/images/icons/header1-logo.svg"
                      : currentRoute === "/index2"
                      ? "/assets/images/icons/footer2-logo.svg"
                      : currentRoute === "/index3"
                      ? "/assets/images/icons/footer3-logo.svg"
                      : currentRoute === "/index4"
                      ? "/assets/images/icons/footer4-logo.svg"
                      : currentRoute === "/index5"
                      ? "/assets/images/icons/footer5-logo.svg"
                      : "/assets/images/icons/header1-logo.svg"
                  }
                />
              </Link>
            </div>
            <div onClick={handleMobileMenu} className="menu-close-btn">
              <i
                className={
                  showMobileMenu === 1
                    ? "bi bi-x-lg text-white bi-chevron-down"
                    : "bi bi-x-lg text-white bi-chevron-up"
                }
              />
            </div>
          </div>
          <ul className="menu-list">
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "homeOne" })}
            >
              <Link
                href="/"
                className={
                  currentRoute === "/" ||
                  currentRoute === "/index2" ||
                  currentRoute === "/index4" ||
                  currentRoute === "/index5"
                    ? "active drop-down"
                    : currentRoute === "/index3"
                    ? "page-active drop-down"
                    : "drop-down"
                }
              >
                Home
              </Link>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "pages" })}
            >
              <Link
                href="#"
                className={
                  currentRoute === "/about" ||
                  currentRoute === "/team" ||
                  currentRoute === "/faq" ||
                  currentRoute === "/job-list"
                    ? "active"
                    : "disable"
                }
              >
                Pages
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "pages"
                    ? "sub-menu d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li></li>
                <li>
                  <Link href="/job-list">Job List</Link>
                </li>
                <li>
                  <Link href="/job-details">Career</Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "service" })}
            >
              <Link
                href="#"
                className={
                  currentRoute === "/service-details" ||
                  currentRoute === "/service"
                    ? "drop-down active"
                    : " drop-down disable"
                }
              >
                Services
              </Link>
              <i className="bi bi-chevron-down dropdown-icon" />
              <ul
                className={
                  state.activeMenu === "service"
                    ? "sub-menu d-block"
                    : "sub-menu d-xl-block d-none"
                }
              >
                <li>
                  <Link href="/service ">
                    <div
                      className={
                        currentRoute === "/service" ? "active" : "disable"
                      }
                    >
                      Services
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/service-details">
                    <div
                      className={
                        currentRoute === "/service-details"
                          ? "active"
                          : "disable"
                      }
                    >
                      Services Details
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className="menu-item-has-children"
              onClick={() => dispatch({ type: "project" })}
              
            >
              <Link
                href="/project"
                className={
                  currentRoute === "/project"
                    ? "drop-down active"
                    : " drop-down disable"
                }
              >
                Projects
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <div
                  className={currentRoute === "/contact" ? "active" : "disable"}
                >
                  Contact Us
                </div>
              </Link>
            </li>
          </ul>
          {/* mobile-search-area */}
          <div className="d-lg-none d-block">
            <form className="mobile-menu-form">
              <div className="input-with-btn d-flex flex-column">
                <input type="text" placeholder="Search here..." />
                <button
                  type="submit"
                  className={
                    currentRoute === "/index2"
                      ? "eg-btn btn--primary2 btn--sm"
                      : currentRoute === "/index3"
                      ? "eg-btn btn--primary3 btn--sm"
                      : currentRoute === "/index4"
                      ? "eg-btn btn--primary4 btn--sm"
                      : currentRoute === "/index5"
                      ? "eg-btn btn--primary5 btn--sm"
                      : "eg-btn btn--primary btn--sm"
                  }
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={
            currentRoute === "/" ||
            currentRoute === "/about" ||
            currentRoute === "/team" ||
            currentRoute === "/admin" ||
            currentRoute === "/faq" ||
            currentRoute === "/job-list" ||
            currentRoute === "/job-details" ||
            currentRoute === "/service" ||
            currentRoute === "/service-details" ||
            currentRoute === "/project" ||
            currentRoute === "/project-details" ||
            currentRoute === "/blog-grid" ||
            currentRoute === "/blog-standard" ||
            currentRoute === "/blog-details" ||
            currentRoute === "/contact"
              ? "nav-right d-flex align-items-center gap-5"
              : currentRoute === "/index2"
              ? "nav-right d-flex align-items-center gap-5"
              : currentRoute === "/index3"
              ? "nav-right style-2 d-flex align-items-center gap-5"
              : currentRoute === "/index4"
              ? "nav-right d-flex align-items-center gap-5"
              : currentRoute === "/index5"
              ? "nav-right d-flex align-items-center gap-5"
              : "nav-right d-flex align-items-center gap-5"
          }
        >
          {currentRoute === "/" ||
          currentRoute === "/about" ||
          currentRoute === "/team" ||
          currentRoute === "/admin" ||
          currentRoute === "/faq" ||
          currentRoute === "/job-list" ||
          currentRoute === "/job-details" ||
          currentRoute === "/service" ||
          currentRoute === "/service-details" ||
          currentRoute === "/project" ||
          currentRoute === "/project-details" ||
          currentRoute === "/blog-grid" ||
          currentRoute === "/blog-standard" ||
          currentRoute === "/blog-details" ||
          currentRoute === "/contact" ||
          currentRoute === "/index2" ||
          currentRoute === "/index3" ? (
            <>
              <div className="mobile-menu-btn d-lg-none d-block">
                <h5
                  className={
                    currentRoute === "/index2" ||
                    currentRoute === "/index3" ||
                    currentRoute === "/index5"
                      ? "text-dark mb-0"
                      : "text-white mb-0"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleMobileMenu}
                >
                  MENU
                </h5>
              </div>
              <div className="header-icons d-flex align-items-center">
                <div className="sidebar-btn" onClick={showSidebarMenu}>
                  <i
                    className={
                      currentRoute === "/"
                        ? "bi bi-list"
                        : currentRoute === "/index3"
                        ? "bi bi-list text-dark"
                        : "bi bi-list"
                    }
                  />
                </div>
              </div>
              <div className="hotline d-xxl-flex d-none">
                <div className="hotline-icon">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1225_6)">
                      <path d="M2.88867 3.31366C1.52734 3.7121 0.451563 4.8078 0.0996094 6.15585C0.0199219 6.45468 0 6.97265 0 8.53319L0.00664063 10.5254L7.37109 16.0039C11.4352 19.0254 14.948 21.5887 15.2004 21.7215C16.3027 22.2926 17.684 22.2926 18.7996 21.7215C19.0719 21.582 22.359 19.1781 26.6289 16.0039L33.9934 10.5254L34 8.53983C34 6.3285 33.9734 6.10936 33.5551 5.28593C33.2363 4.64843 32.5391 3.95116 31.9016 3.63241C30.9453 3.15429 32.134 3.18749 16.9602 3.19413C4.13711 3.19413 3.26055 3.20741 2.88867 3.31366ZM30.5801 6.0164C31.1977 6.34843 31.2973 6.61405 31.3305 7.96874L31.357 9.06444L24.4773 14.1777C19.291 18.0359 17.5312 19.3109 17.3055 19.3773C17.0531 19.4504 16.9469 19.4504 16.7012 19.3773C16.4754 19.3109 14.6891 18.0226 9.52266 14.1777L2.64297 9.06444L2.66953 7.96874C2.68945 7.07226 2.71602 6.83319 2.81563 6.64061C3.04141 6.20897 3.31367 6.00311 3.78516 5.90351C3.91133 5.87694 9.93437 5.86366 17.166 5.8703L30.3145 5.87694L30.5801 6.0164Z" />
                      <path d="M0.000124167 20.5926C0.000124167 28.1894 -0.0197977 27.7844 0.445046 28.7141C0.757155 29.3316 1.45442 30.0355 2.09192 30.3609C3.03489 30.8457 1.85286 30.8125 17.0001 30.8125C32.1275 30.8125 30.9454 30.8457 31.9017 30.3676C32.5392 30.0488 33.2365 29.3516 33.5552 28.7141C34.0267 27.7844 34.0001 28.1961 33.9868 20.5926L33.9669 13.7461L32.672 14.7023L31.3771 15.6652L31.3439 21.3961C31.3107 26.8348 31.304 27.1402 31.1845 27.3594C31.0118 27.6848 30.8857 27.8176 30.5802 27.9836L30.3146 28.123H17.0001H3.68567L3.42005 27.9836C3.11458 27.8176 2.98841 27.6848 2.81575 27.3594C2.69622 27.1402 2.68958 26.848 2.66966 21.4027L2.64973 15.6785L1.41458 14.7621C0.730593 14.2574 0.139577 13.8191 0.0864523 13.7926C0.0134054 13.7461 0.000124167 14.9082 0.000124167 20.5926Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1225_6">
                        <rect width={34} height={34} />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="hotline-info">
                  <span>Messge Us</span>
                  <h6>
                    <Link href="mailto:info@example.com">
                      info@codeertz.com
                    </Link>
                  </h6>
                </div>
              </div>
              <div
                className={
                  currentRoute === "/"
                    ? "eg-btn btn--primary header-btn"
                    : currentRoute === "/index2"
                    ? "eg-btn btn--primary2 header-btn"
                    : currentRoute === "/index3"
                    ? "eg-btn btn--primary3 header-btn"
                    : currentRoute === "/index4"
                    ? "eg-btn btn--primary4 header-btn"
                    : currentRoute === "/index5"
                    ? "eg-btn btn--primary5 header-btn"
                    : "eg-btn btn--primary header-btn"
                }
              >
                <Link href="/contact">LETS TALK</Link>
              </div>
            </>
          ) : currentRoute === "/index4" || currentRoute === "/index5" ? (
            <>
              <div className="mobile-menu-btn d-lg-none d-block">
                <h5
                  className={
                    currentRoute === "/index4" ||
                    currentRoute === "/index2" ||
                    currentRoute === "/index5"
                      ? "text-dark mb-0"
                      : "text-white mb-0"
                  }
                  onClick={handleMobileMenu}
                  style={{ cursor: "pointer" }}
                >
                  MENU
                </h5>
              </div>
              <div className="eg-btn header-btn">
                <Link href="/contact">LETS TALK</Link>
              </div>
              <ul className="header-social d-xxl-flex d-none justify-content-center align-items-center flex-row gap-3">
                <li>
                  <Link href="https://www.instagram.com">IN</Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com">FB</Link>
                </li>
                <li>
                  <Link href="https://www.twitter.com">TW</Link>
                </li>
                <li>
                  <Link href="https://www.pinterest.com">PR</Link>
                </li>
              </ul>
              <div className="header-icons d-flex align-items-center">
                <div className="search-btn" onClick={handleSearchbarBtn}>
                  <i className="bi bi-search" />
                </div>
                <div className="sidebar-btn" onClick={showSidebarMenu}>
                  <i className="bi bi-list" />
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
