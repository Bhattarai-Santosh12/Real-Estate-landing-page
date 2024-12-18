import React from "react";
import "./Hero.css";
import { IoLocationOutline } from "react-icons/io5";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColCenter hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>

          <div className="flexColStart hero-discription">
            <span className="secondaryText">
              Unlock Your Dream Home: Where Every Key Opens New Possibilities!
            </span>

            <span className="secondaryText">
              Find Your Perfect Space: Your Journey to Home Starts Here!
            </span>
          </div>

          <div className="flexCenter search-bar">
            <IoLocationOutline color="var(--blue)" size={25} />
            <input placeholder="Search by title/city/country..." type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.jpg" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
