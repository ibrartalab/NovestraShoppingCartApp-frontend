import React from "react";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import TopCollection from "../components/Landing/TopCollection";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-nav-wrapper">
        <Navbar />
        <Hero />
      </div>
      <TopCollection />
    </div>
  );
};

export default Home;
