import React from "react";
import "../styles/Hero.css";

const Hero = ({ title, imageUrl }) => {
  return (
    <section className="hero-container">
      {/* Text Content - Left Side */}
      <div className="hero-text-content">
        <h1 className="hero-main-heading">{title}</h1>

        <p className="hero-description">
          ZeeCare Medical Institute is a state-of-the-art facility dedicated to
          providing comprehensive healthcare services with compassion and
          expertise. Our team of skilled professionals is committed to
          delivering personalized care tailored to each patient's needs.
        </p>
      </div>

      <div className="hero-image-container">
        <img
          src={imageUrl}
          alt="Medical Illustration"
          className="hero-bouncing-image"
        />
      </div>
    </section>
  );
};

export default Hero;
