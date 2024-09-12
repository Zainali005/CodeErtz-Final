import React, { useEffect, useState } from "react";
import Head from "next/head";
import About3 from "../components/about/About3";
import Banner3 from "../components/banner/Banner3";
import Blog3 from "../components/blog/Blog3";
import JoinOurTeam from "../components/common/JoinOurTeam";
import OurPartner from "../components/common/OurPartner";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import OfferSection from "../components/common/OfferSection";
import Portfolio3 from "../components/portfolio/Portfolio3";
import Service3 from "../components/service/Service3";
import Team3 from "../components/team/Team3";
import Testimonial3 from "../components/testimonial/Testimonial3";
import Preloader from "../components/common/Preloader";
import Header from "../components/header/Header";

function Home3() {
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
        <Preloader style="home3preloader" />
      ) : (
        <>
          <Head>
            <title> CodeErtz - Evolve bit by bit</title>
            <meta name="description" content="Generated by create next app" />
          </Head>
          <Header />
          <Banner3 />
          <Service3 />
          <About3 />
          <Portfolio3 />
          <OfferSection />
          <Team3 />
          <Blog3 />
          <Testimonial3 />
          <JoinOurTeam btnclass="btn--primary3" />
          <OurPartner />
          <Footer
            footerStyle="style-3"
            footerImage="assets/images/icons/footer3-logo.svg"
          />
        </>
      )}
    </>
  );
}

export default Home3;
