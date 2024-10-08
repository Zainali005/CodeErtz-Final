import Head from "next/head";
import { useEffect, useState } from "react";
import About1 from "../components/about/About1";
import Activities from "../components/activities/ActivitiesArea";
import Banner1 from "../components/banner/Banner1";
import Blog from "../components/blog/Blog";
import OurPartner from "../components/common/OurPartner";
import Preloader from "../components/common/Preloader";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header3";
import Portfolio1 from "../components/portfolio/Portfolio1";
import Service1 from "../components/service/Service1";
import Team1 from "../components/team/Team1";
import Testimonial1 from "../components/testimonial/Testimonial1";

export default function Home() {
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
        <Preloader style="home1preloader" />
      ) : (
        <>
          <Head>
            <title> CodeErtz - Evolve bit by bit </title>{" "}
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/icons/header1-logoicon.png" />
          </Head>{" "}
          <Header />
          <Banner1 />
          <About1 />
          <Service1 />
          <Portfolio1 />
          <Activities />
          <Team1 />
          <Testimonial1 />
          <OurPartner />
          <Footer footerImage="assets/images/icons/footer1-logo.svg" />
        </>
      )}{" "}
    </>
  );
}
