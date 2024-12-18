import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="w-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side  */}
        <div className="flexColStart f-left">
          <span className="primaryText">Real-Estate</span>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText text">145 New York, FL 5467, USA</span>
          <div className="flexStart f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
