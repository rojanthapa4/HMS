import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <>
      <main className="about-page">
        <Hero
          title={
            "Discover ZeeCare Medical Institute. Your Trusted Healthcare Partner"
          }
          imageUrl="/about.png"
          altText="Medical team discussing patient care"
        />

        <Biography
          imageUrl="/whoweare.png"
          altText="Our medical facility overview"
        />

        <section className="mission-statement">
          <h2>Our Mission</h2>
          <p>
            Dedicated to providing exceptional healthcare through innovation,
            compassion, and medical excellence.
          </p>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
