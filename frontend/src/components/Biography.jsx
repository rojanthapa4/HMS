import React from "react";
import "../styles/Biography.css";

const Biography = ({ imageUrl }) => {
  return (
    <section className="biography-section">
      <div className="biography-container">
        <div className="biography-image">
          <img src={imageUrl} alt="Our medical team" className="bio-image" />
        </div>

        <div className="biography-content">
          <span className="section-subtitle">About Us</span>
          <h2 className="section-title">Our Medical Legacy</h2>

          <div className="bio-text">
            <p className="bio-paragraph">
              Established in 1995, ZeeCare Medical Institute has been at the
              forefront of innovative healthcare delivery. As a JCI-accredited
              facility, we combine cutting-edge medical technology with
              compassionate care to provide comprehensive health solutions for
              our patients.
            </p>

            <div className="highlight-box">
              <p>🏆 2023 National Healthcare Excellence Award Winner</p>
              <p>⭐ 98% Patient Satisfaction Rate (2023 HealthCare Survey)</p>
            </div>

            <p className="bio-paragraph">
              Our team of 200+ board-certified physicians and 500+ nursing
              professionals specializes in over 40 medical disciplines. From
              advanced cardiac care to minimally invasive surgical techniques,
              we maintain the highest standards of medical excellence through
              continuous research and education.
            </p>

            <p className="bio-paragraph">
              Through our partnership with leading medical universities and
              research institutions, we remain committed to developing
              innovative treatment protocols while maintaining our core values
              of patient-centered care and medical ethics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
