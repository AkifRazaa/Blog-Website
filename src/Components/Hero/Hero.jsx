import React from "react";
import "./Hero.css";
import hero_image from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <img src={hero_image} alt="Hero" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Our Blog</h1>
        </div>
      </div>
      <div className="hero-right">
        <h2 className="hero-heading">
          Diagnose Car Problems If You Don't Know Much About Cars
        </h2>
        <p className="hero-text">
          We provide a full range of front-end mechanical repairs for all makes
          and models of cars, no matter the cause. This includes front-end
          mechanical repairs and more.
        </p>
      </div>
    </section>
  );
};

export default Hero;
