import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
} from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Banner2() {
  const banner2Slide = {
    slidesPerView: "auto",
    speed: 1500,
    loop: true,
    spaceBetween: 10,
    centeredSlides: false,
    roundLengths: true,
    parallax: true,
    effect: "fade",
    navigation: false,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: ".banner2-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <div className="banner-section2">
        <img
          src="assets/images/icons/banner2-spring.svg"
          className="banner2-spring1"
          alt="image"
        />
        <img
          src="assets/images/icons/banner2-spring.svg"
          className="banner2-spring2"
          alt="image"
        />
        <img
          src="assets/images/icons/banner2-circle.svg"
          className="banner2-circle1"
          alt="image"
        />
        <img
          src="assets/images/icons/banner2-circle.svg"
          className="banner2-circle2"
          alt="image"
        />
        <img
          src="assets/images/bg/banner2-vector.png"
          className="banner2-vector"
          alt="image"
        />
        <ul className="banner-social2 gap-5">
          <li>
            <Link href="https://www.twitter.com/">Twitter</Link>
          </li>
          <li>
            <Link href="https://www.facebook.com/">Facebook</Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/">Instagram</Link>
          </li>
        </ul>
        <Swiper {...banner2Slide} className="swiper banner2">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-1">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-10">
                      <div className="banner2-content">
                        <span>Wellcome to Our Agency</span>
                        <h1>Smart Brand Ideas for your are Here</h1>
                        <p>
                          Get the most of reduction in your team’s operating
                          costs for the whole product which creates amazing
                          UI/UX experiences.
                        </p>
                        <Link href="/project">
                          <div className="eg-btn btn--primary2 btn--lg">
                            Discover More
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-2">
                <div className="container">
                  <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-xl-7 col-lg-10">
                      <div className="banner2-content">
                        <span>Welcome To Auction House</span>
                        <h2>Creative To Plan Your Business Company</h2>
                        <p>
                          Nulla facilisi. Maecenas ac tellus ut ligula interdum
                          convallis. Suspendisse sit amet turpina sagittis,
                          ultrices dui et, aliquam urna.
                        </p>
                        <Link href="/project">
                          <div className="eg-btn btn--primary2 btn--lg">
                            Start Exploring
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="banner2-pagination d-flex justify-content-center flex-row align-items-center gap-2" />
      </div>
    </>
  );
}

export default Banner2;
