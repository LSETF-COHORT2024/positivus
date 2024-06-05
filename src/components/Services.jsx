import React from "react";
import Arrow from "../assets/images/lemon-arrow.png";
import Illustration from "../assets/images/magnifier.png";
import "../css/service.css";

const Services = (props) => {
  return (
    <div className="services-comp" style={{ backgroundColor: props.bgColor }}>
      <div className="text">
        <h5 style={{ backgroundColor: props.bgText }}>{props.title1}</h5>
        <h5 style={{ backgroundColor: props.bgText }}>{props.title2}</h5>

        <br />
        <br />

        <p style={{ marginBottom: "0px", fontSize: "20px" }}>
          <span
            style={{
              padding: "15px",
              marginRight: "10px",
              backgroundColor: props.arrowcol,
              height: "50px",
              width: "50px",
              borderRadius: "50px",
              textAlign: "center",
            }}
          >
            <img src={props.arrow} alt="" />
          </span>
          Learn more
        </p>
      </div>

      <div className="image">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Services;
