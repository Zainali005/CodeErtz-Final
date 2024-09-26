import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay, Navigation, EffectFade]);
function Banner3() {
  const banner3Slide = {
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
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
      el: ".banner3-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <div className="banner-section3">
        <img
          src="assets/images/icons/banner3-circle.svg"
          className="banner3-circle"
          alt="image"
        />
        <img
          src="assets/images/icons/banner3-circle3.svg"
          className="banner3-circle3"
          alt="image"
        />
        <img
          src="assets/images/icons/banner3-circle2.svg"
          className="banner3-circle2"
          alt="image"
        />
        <ul className="banner-social3 gap-5">
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
        <Swiper {...banner3Slide} className="swiper banner3">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-1">
                <div className="container">
                  <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-xl-7 col-lg-9">
                      <div className="banner3-content">
                        <span>Wellcome to Our Agency</span>
                        <h1>Smart Ideas for your Brand are Here </h1>
                        <p>
                          Get the most of reduction in your team’s operating
                          costs for the whole product which creates amazing
                          UI/UX experiences.
                        </p>
                        <div className="button-group d-flex justify-content-lg-start justify-content-center align-items-center flex-wrap gap-4">
                          <Link href="/about">
                            <div className="eg-btn btn--primary3 btn--lg">
                              LEARN MORE
                            </div>
                          </Link>
                          <Link href="/contact">
                            <div className="eg-btn btn--transparent btn--lg">
                              GET IN TOUCH
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="slider-bg-2">
                <div className="container">
                  <div className="row d-flex justify-content-start align-items-center">
                    <div className="col-xl-7 col-lg-9">
                      <div className="banner3-content">
                        <span>Wellcome to Our Agency</span>
                        <h1>Get Your Brand More Quick Selling</h1>
                        <p>
                          Get the most of reduction in your teams operating
                          costs for the whole product which creates amazing
                          UI/UX experiences.
                        </p>
                        <div className="button-group d-flex justify-content-lg-start justify-content-center align-items-center flex-wrap gap-4">
                          <Link href="/about">
                            <div className="eg-btn btn--primary3 btn--lg">
                              LEARN MORE
                            </div>
                          </Link>
                          <Link href="/contact">
                            <div className="eg-btn btn--transparent btn--lg">
                              GET IN TOUCH
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="banner3-pagination d-flex justify-content-center flex-column align-items-center gap-2" />
      </div>
    </>
  );
}

export default Banner3;
