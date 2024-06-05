import React from "react";
import Hero from "../assets/images/hero-image.png";
import Button from "react-bootstrap/Button";



const hero = () => {
  return (
    <>
      <div className="d-flex justify-content-between hero-container">
        <div className="left-hero d-flex flex-column gap-2">
          <h1 className="navigate">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-4 pb-2 align-text-start">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <Button variant="dark" className="" style={{ width: "fit-content" }}>
            Book a consultation
          </Button>
        </div>

        <div>
          <img src={Hero} alt="" className="hero-image" />
        </div>
      </div>
    </>
  );
};

export default hero;
