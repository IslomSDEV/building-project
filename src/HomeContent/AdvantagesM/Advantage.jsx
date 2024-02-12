import React from "react";
import "./Advantage.css";
import { RiTeamLine } from "react-icons/ri";
import { LiaSmsSolid } from "react-icons/lia";
import { GoShieldCheck } from "react-icons/go";

function Advantage() {
  return (
    <>
      <div className="advantage">
        <div className="container">
          <div className="aboutm_header_box">
            <div className="aboutm_line_y"></div>
            <h2 className="aboutm_headName">Our Advantages</h2>
          </div>
          <div className="advantage_flex">
            <div className="advantage_cards">
              <RiTeamLine className="advantage_icon" />
              <h3 className="advantage_card_title">Our team</h3>
              <p className="advantage_card_text">
                The company recruits experienced employees on a competitive
                basis
              </p>  
            </div>

            <div className="advantage_cards">
              <LiaSmsSolid className="advantage_icon" />
              <h3 className="advantage_card_title">Positive customer approach</h3>
              <p className="advantage_card_text">
              By looking at the great work we have done through our website, you will be sure that we have earned the trust of our customers
              </p>
            </div>

            <div className="advantage_cards">
              <GoShieldCheck className="advantage_icon" />
              <h3 className="advantage_card_title">All work guaranteed</h3>
              <p className="advantage_card_text">
              We perform our mission carefully and appreciate your belief in our company All mistakes were clearly corrected
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advantage;
