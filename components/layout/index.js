import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Script from "next/script";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title> CodeErtz - Evolve bit by bit </title>{" "}
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/icons/header1-logoicon.png" />
      </Head>{" "}
      <Header /> {children}{" "}
      <Footer footerImage="assets/images/icons/footer1-logo.svg" />
    </>
  );
}

export default Layout;
