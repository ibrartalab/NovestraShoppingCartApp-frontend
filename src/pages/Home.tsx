import React from "react";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import TopCollection from "../components/Landing/TopCollection";
import Products from "../components/Landing/Products";
import AboutUs from "../components/Landing/AboutUs";
import Footer from "../components/Landing/Footer";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-nav-wrapper">
        <Navbar />
        <Hero />
      </div>
      <TopCollection />
      <Products />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
