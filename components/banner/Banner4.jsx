import React, { useState } from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Link from 'next/link'
function Banner4() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>

      <div className="banner-section4">
        <img src="assets/images/bg/banner4-wave1.svg" className="banner4-wave1 img-fluid" alt="image" />
        <img src="assets/images/bg/banner4-wave2.svg" className="banner4-wave2 img-fluid" alt="image" />
        <img src="assets/images/bg/banner4-spring.svg" className="banner4-spring img-fluid" alt="image" />
        <img src="assets/images/bg/banner4-dot-square.svg" className="banner4-dot-sq img-fluid" alt="image" />
        <Link href="#about" className="go-down-btn"></Link>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-7">
              <div className="banner-content style-2 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.2s">
                <span>Wellcome to Our Agency</span>
                <h1>Smart Ideas for your Brand are Here</h1>
                <p className="para">Donec tincidunt lacinia diam, eu volutpat est sollicitudin at. Vestibulum ut mi
                  tristi que, vulputate ante quis, tempus enim. Proin quis euismod purus. Suspen disse
                  efficitur <br /> aliquam enim sed consequat vulputate ante quis.</p>
                <div className="button-group gap-5">
                  <Link href="/project" ><div className="eg-btn btn--primary4 btn--lg" style={{ cursor: "pointer" }}>Discover More</div></Link>
                  <div className="btn-with-vdo d-flex align-items-center gap-4"  onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
                    <div className="video-play">
                      <div  className="popup-youtube video-icon style-2" ><i className="bx bx-play" /></div>
                    </div>
                    <div className="video-btn">How it works</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <img src="assets/images/bg/banner4-circel1.svg" className="banner4-circel1" alt="image" />
              <img src="assets/images/bg/banner4-circel2.svg" className="banner4-circel2" alt="image" />
              <div className="banner4-img">
                <img src="assets/images/bg/banner4-bg.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId="TboWOSW7qCI"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  )
}

export default Banner4