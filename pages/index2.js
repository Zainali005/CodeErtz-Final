import Head from "next/head";
import React, { useEffect, useState } from "react";
import About2 from "../components/about/About2";
import Banner2 from "../components/banner/Banner2";
import Blog2 from "../components/blog/Blog2";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import Preloader from "../components/common/Preloader";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Header2 from "../components/header/Header2";
import RecentJobs from "../components/jobs/RecentJobs";
import Portfolio2 from "../components/portfolio/Portfolio2";
import Service2 from "../components/service/Service2";
import Team2 from "../components/team/Team2";
import Teastimonial2 from "../components/testimonial/Teastimonial2";
import VideoArea2 from "../components/video/VideoArea2";

function Home2() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader style="home2preloader" />
      ) : (
        <>
          <Head>
            <title> CodeErtz - Evolve bit by bit</title>{" "}
            <meta name="description" content="Generated by create next app" />
          </Head>

          <Header />
          <Banner2 />
          <About2 />
          <Service2 />
          <Portfolio2 />
          <RecentJobs />
          <VideoArea2 />
          <Team2 />
          <Teastimonial2 />
          <Blog2 />
          <JoinOurTeam btnclass="btn--primary2" />
          <OurPartner />
          <Footer
            footerImage="assets/images/icons/footer2-logo.svg"
            footerStyle="style-2"
          />
        </>
      )}
    </>
  );
}

export default Home2;
