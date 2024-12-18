import React from "react";
import { MdCall } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { MdVideoCall } from "react-icons/md";
import "./Contact.css";

function Contact() {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better{" "}
          </span>
          <div className="flexColStart contactModes">
            {/* first Row  */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">023 456 7890</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <IoChatboxEllipses size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">023 456 7890</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
              </div>
              {/* third Mode  */}
              <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">023 456 7890</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              
              {/* fourth Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaRegMessage size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">message</span>
                    <span className="secondaryText">023 456 7890</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
              
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./r5.jpg" style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
