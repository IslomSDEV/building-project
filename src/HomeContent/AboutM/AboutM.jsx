import React from "react";
import "./AboutM.css";
import { NavLink } from "react-router-dom";

function AboutM() {
  return (
    <>
      <div className="aboutm">
        <div className="container">
          <div className="aboutm_header_box">
            <div className="aboutm_line_y"></div>
            <h2 className="aboutm_headName">About DISCOVER INVEST</h2>
          </div>
          <div className="aboutm_flex">
            <div className="aboutm_left">
              <p className="aboutm_info">
                We don't just create projects, we create new opportunities. By
                building state-scale facilities, we are building the future. We
                care about the environment: the company takes full
                responsibility for the environmental aspects related to the
                construction and operation of buildings and infrastructure.
              </p>
            </div>
            <div className="aboutm_right">
              <div className="aboutm_card_flex">
                <div className="aboutm_card">
                  <h3 className="aboutm_card_title">4000+</h3>
                  <p className="aboutm_card_text">The number of employees</p>
                </div>
                <div className="aboutm_card">
                  <h3 className="aboutm_card_title">150+</h3>
                  <p className="aboutm_card_text">Projects</p>
                </div>
                <div className="aboutm_card">
                  <h3 className="aboutm_card_title">16</h3>
                  <p className="aboutm_card_text">Residential complexes</p>
                </div>
                <div className="aboutm_card">
                  <h3 className="aboutm_card_title">14</h3>
                  <p className="aboutm_card_text">14 years on marketplace</p>
                </div>
                <div className="aboutm_card">
                  <h3 className="aboutm_card_title">250</h3>
                  <p className="aboutm_card_text">Special techniques recuperated</p>
                </div>
                <NavLink to={"/about"}>
                <div className="about_button_card">
                  <h3 className="about_button_card_title">About</h3>
                </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutM;
