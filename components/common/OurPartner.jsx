import React from "react";
import { sponsoreData } from "../../data/index";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation, Pagination, Autoplay]);
function OurPartner() {
  const partnerSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    roundLengths: true,
    navigation: {
      nextEl: ".sponsor-prev1",
      prevEl: ".sponsor-next1",
    },

    breakpoints: {
      380: {
        slidesPerView: 2,
      },
      530: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 7,
      },
    },
  };
  return (
    <>
      <div className="sponsor-section pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-content-lg-start justify-content-center">
              <div className="section-title primary5 text-start mb-0">
                <span>-Our Partners-</span>
                <h3 className="mb-0">People Who Trust Us</h3>
              </div>
            </div>
            <div className="col-md-6 d-lg-flex justify-content-end d-none">
              <div className="slider-arrows2 text-center d-flex gap-4">
                <div
                  className="sponsor-prev1 swiper-prev-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <svg
                    width={46}
                    height={46}
                    viewBox="0 0 46 46"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={23} cy={23} r="22.25" strokeWidth="1.5" />
                    <path d="M20 27.573V23V18.427C20 18.2574 19.8022 18.1648 19.672 18.2734L14 23L19.672 27.7266C19.8022 27.8352 20 27.7426 20 27.573Z" />
                    <path d="M32 23.5C32.2761 23.5 32.5 23.2761 32.5 23C32.5 22.7239 32.2761 22.5 32 22.5V23.5ZM19.672 27.7266L19.9921 27.3425V27.3425L19.672 27.7266ZM14 23L13.6799 22.6159L13.219 23L13.6799 23.3841L14 23ZM19.672 18.2734L19.3519 17.8893L19.3519 17.8893L19.672 18.2734ZM32 22.5H20V23.5H32V22.5ZM19.5 23V27.573H20.5V23H19.5ZM19.9921 27.3425L14.3201 22.6159L13.6799 23.3841L19.3519 28.1107L19.9921 27.3425ZM14.3201 23.3841L19.9921 18.6575L19.3519 17.8893L13.6799 22.6159L14.3201 23.3841ZM19.5 18.427V23H20.5V18.427H19.5ZM19.9921 18.6575C19.7967 18.8203 19.5 18.6814 19.5 18.427H20.5C20.5 17.8335 19.8078 17.5093 19.3519 17.8893L19.9921 18.6575ZM19.5 27.573C19.5 27.3186 19.7967 27.1797 19.9921 27.3425L19.3519 28.1107C19.8078 28.4907 20.5 28.1665 20.5 27.573H19.5Z" />
                  </svg>
                </div>
                <div
                  className="sponsor-next1 swiper-next-arrow"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <svg
                    width={46}
                    height={46}
                    viewBox="0 0 46 46"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx={23} cy={23} r={23} />
                    <path d="M26 18.427V23V27.573C26 27.7426 26.1978 27.8352 26.328 27.7266L32 23L26.328 18.2734C26.1978 18.1648 26 18.2574 26 18.427Z" />
                    <path d="M14 22.5C13.7239 22.5 13.5 22.7239 13.5 23C13.5 23.2761 13.7239 23.5 14 23.5V22.5ZM26.328 18.2734L26.0079 18.6575V18.6575L26.328 18.2734ZM32 23L32.3201 23.3841L32.781 23L32.3201 22.6159L32 23ZM26.328 27.7266L26.6481 28.1107L26.6481 28.1107L26.328 27.7266ZM14 23.5H26V22.5H14V23.5ZM26.5 23V18.427H25.5V23H26.5ZM26.0079 18.6575L31.6799 23.3841L32.3201 22.6159L26.6481 17.8893L26.0079 18.6575ZM31.6799 22.6159L26.0079 27.3425L26.6481 28.1107L32.3201 23.3841L31.6799 22.6159ZM26.5 27.573V23H25.5V27.573H26.5ZM26.0079 27.3425C26.2033 27.1797 26.5 27.3186 26.5 27.573H25.5C25.5 28.1665 26.1922 28.4907 26.6481 28.1107L26.0079 27.3425ZM26.5 18.427C26.5 18.6814 26.2033 18.8203 26.0079 18.6575L26.6481 17.8893C26.1922 17.5093 25.5 17.8335 25.5 18.427H26.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center position-relative mt-60">
            <Swiper
              {...partnerSlider}
              className="swiper sponsor-slider swiper-fix wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <div className="swiper-wrapper">
                {sponsoreData.map((item) => {
                  return (
                    <SwiperSlide key={item.id} className="swiper-slide">
                      <Link href="#" className="single-sponsor ">
                        <img src={item.image} alt="image" />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurPartner;
