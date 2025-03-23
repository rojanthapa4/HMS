import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Departments.css";

const Departments = () => {
  const departmentsArray = [
    {
      name: "Pediatrics",
      imageUrl: "/departments/pedia.jpg",
    },
    {
      name: "Orthopedics",
      imageUrl: "/departments/ortho.jpg",
    },
    {
      name: "Cardiology",
      imageUrl: "/departments/cardio.jpg",
    },
    {
      name: "Neurology",
      imageUrl: "/departments/neuro.jpg",
    },
    {
      name: "Oncology",
      imageUrl: "/departments/onco.jpg",
    },
    {
      name: "Radiology",
      imageUrl: "/departments/radio.jpg",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/departments/therapy.jpg",
    },
    {
      name: "Dermatology",
      imageUrl: "/departments/derma.jpg",
    },
    {
      name: "ENT",
      imageUrl: "/departments/ent.jpg",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      partialVisibilityGutter: 20,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  return (
    <section className="departments-section">
      <div className="departments-container">
        <h2 className="section-title">Medical Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass="carousel-item"
          containerClass="carousel-container"
          sliderClass="carousel-slider"
          partialVisible={true}
          centerMode={false}
        >
          {departmentsArray.map((depart, index) => (
            <div key={index} className="department-card">
              <div className="card-image-container">
                <img
                  src={depart.imageUrl}
                  alt={depart.name}
                  className="department-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="department-info">
                <h3 className="department-name">{depart.name}</h3>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Departments;
