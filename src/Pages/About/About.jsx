import React from "react";
import "./About.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import AboutInfoBg from "../../assets/Images/aboutOneInfoBg.jpg";
import M1 from "../../assets/Images/m-1.jpg";
import M2 from "../../assets/Images/m-2.jpg";
import M3 from "../../assets/Images/m-3.jpg";

function About() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="about_flex">
            <h2 className="about_title">ABOUT COMPANY</h2>
            <p className="about_text">
              We don't just create projects, we create new opportunities. By
              building state-scale facilities, we are building the future. We
              care about the environment:
            </p>
            <button className="about_skachat_btn">
              Download CV{" "}
              <AiOutlineCloudDownload className="about_skachat_icon" />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="about_info">
        <div className="container">
          <div className="about_info_flex">
            <div className="abnout_info_left">
              <div className="aboutm_header_box">
                <div className="aboutm_line_y"></div>
                <h2 className="aboutm_headName">About Company</h2>
              </div>
              <div className="about_info_bg"></div>
            </div>
            <div className="about_info_right">
              <div className="about_info_picture_box">
                <img
                  className="about_info_image"
                  src={AboutInfoBg}
                  alt="picture"
                />
              </div>

              <p className="about_info_text">
                We don't just create projects, we create new opportunities. By
                building state-scale facilities, we are building the future. We
                care about the environment: the company takes full
                responsibility for the environmental aspects related to the
                construction and operation of buildings and infrastructure.
              </p>

              <button className="about_skachat_btn">All Projects</button>
            </div>
          </div>
        </div>
      </div>

      <div className="about_category">
        <div className="container">
          <div className="about_category_flex">
            <div className="about_category_card_flex">
              <div className="about_category_card_left">
                <div className="about_card_flex_number_div">1</div>
                <div className="about_card_flex_info_div">
                  <h3 className="about_card_flex_info_title">Our mission</h3>
                  <p className="about_card_flex_info_text">
                    Our mission We introduce the most advanced technologies in
                    construction in Uzbekistan and create modern design
                    solutions. Relying on first-class workers, we build
                    affordable housing and industrial buildings for many years.
                  </p>
                </div>
              </div>
              <div className="about_category_card_right">
                <div className="about_info_picture_box about_category_image">
                  <img
                    className="about_info_image"
                    src={M1}
                    alt="picture"
                  />
                </div>
              </div>
            </div>

            <div className="about_category_card_flex">
              <div className="about_category_card_left">
                <div className="about_card_flex_number_div">2</div>
                <div className="about_card_flex_info_div">
                  <h3 className="about_card_flex_info_title">Our vision</h3>
                  <p className="about_card_flex_info_text">
                    Creation of the best project company in Central Asia, which
                    provides an opportunity to: - Society - to improve the
                    standard of living of people by setting high standards in
                    work. - Clients - to enjoy joint activities, to build
                    long-term and open relationships. - Employees - constant
                    growth,
                  </p>
                </div>
              </div>
              <div className="about_category_card_right">
                <div className="about_info_picture_box about_category_image">
                  <img
                    className="about_info_image"
                    src={M2}
                    alt="picture"
                  />
                </div>
              </div>
            </div>

            <div className="about_category_card_flex">
              <div className="about_category_card_left">
                <div className="about_card_flex_number_div">3</div>
                <div className="about_card_flex_info_div">
                  <h3 className="about_card_flex_info_title">Our values</h3>
                  <p className="about_card_flex_info_text">
                    Our values Since the founding (LLC) "Discover Invest" in
                    2008, we have been working only with professionals. Our
                    specialists use advanced technologies and an innovative
                    approach to business.Regardless of the time and place of
                    operation, we remain committed to our values: staff and
                    safety, continuous improvement and the trust of our
                    customers.
                  </p>
                </div>
              </div>
              <div className="about_category_card_right">
                <div className="about_info_picture_box about_category_image">
                  <img
                    className="about_info_image"
                    src={M3}
                    alt="picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="result">
        <div className="container">
            <div className="result_flex">
                <div className="aboutm_card result_card">
                  <h3 className="aboutm_card_title">4000+</h3>
                  <p className="aboutm_card_text">The number of employees</p>
                </div>
                <div className="aboutm_card result_card">
                  <h3 className="aboutm_card_title">150+</h3>
                  <p className="aboutm_card_text">Projects</p>
                </div>
                <div className="aboutm_card result_card">
                  <h3 className="aboutm_card_title">16</h3>
                  <p className="aboutm_card_text">Residential complexes</p>
                </div>
                <div className="aboutm_card result_card">
                  <h3 className="aboutm_card_title">14</h3>
                  <p className="aboutm_card_text">14 years on marketplace</p>
                </div>
                <div className="aboutm_card result_card">
                  <h3 className="aboutm_card_title">250</h3>
                  <p className="aboutm_card_text">Special techniques recuperated</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default About;
