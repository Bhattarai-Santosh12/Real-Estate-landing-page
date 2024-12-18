import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Optional
import "swiper/css/navigation"; // Optional
import "./Residencies.css";
import data from "../../utils/slider.json";
// import { sliderSettings } from "../../utils/common";

function Residencies() {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        {/* <Swiper
          slidesPerView={4} // Adjust based on design
          spaceBetween={30} // Space between slides
          pagination={{ clickable: true }} // Enable pagination if needed
          
        > */}
        <Swiper
          slidesPerView={4} 
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }}
        >
          <SlideNextButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className=" r-card">
                <img src={card.image} alt="Home Images" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange", fontSize: "1.5rem" }}>$</span>
                  <span style={{ fontSize: "1.5rem" }}>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies;

const SlideNextButton = () => {
  const swaper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swaper.slidePrev()}>&lt;</button>
      <button onClick={() => swaper.slideNext()}>&gt;</button>
    </div>
  );
};
