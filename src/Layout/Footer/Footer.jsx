import React from "react";
import "./Footer.css";
import { MdLocationOn } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosStopwatch } from "react-icons/io";
import flagIcon from "../../assets/Images/uzb-flag.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_flex">
            <div className="footer_left">
              <div className="aboutm_header_box">
                <div className="aboutm_line_y"></div>
                <h2 className="aboutm_headName">Contacts</h2>
              </div>
              <div className="loc_tel_date_box">
                <div className="location_box">
                  <MdLocationOn className="footer_icon" />
                  <div className="location_info_box">
                    <h3 className="location_title">Address</h3>
                    <p className="location_info">
                      Uzbekistan, Tashkent, National Park of Uzbekistan named
                      after Alisher Navoi
                    </p>
                  </div>
                </div>

                <div className="location_box">
                  <PiPhoneCallFill className="footer_icon" />
                  <div className="location_info_box">
                    <h3 className="location_title">Phone</h3>
                    <p className="location_info">+998901234567</p>
                  </div>
                </div>

                <div className="location_box">
                  <IoIosStopwatch className="footer_icon" />
                  <div className="location_info_box">
                    <h3 className="location_title">Working hours</h3>
                    <p className="location_info">09:00 - 18:00 Mon-Sat</p>
                  </div>
                </div>
              </div>

              <div className="form_div">
                <form className="footer_form">
                  <label className="foter_label phone_number_f">
                    Phone number
                    <input
                      className="footer_input f_phone_Input"
                      type="text"
                      placeholder="+998"
                    />
                  </label>
                  <label className="foter_label">
                    Name
                    <input
                      className="footer_input"
                      type="text"
                      placeholder="What's your name ?"
                    />
                  </label>
                  <button className="footer_button">Feedback</button>
                  {/* <img className="flag_icon_f" src={flagIcon} alt="" /> */}
                </form>
              </div>
            </div>
            <div className="footer_right">
              <div className="footer_map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.092436320821!2d69.2508659764738!3d41.306852671310075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b1b4136028b%3A0xc0baaa04a2afdf92!2z0YPQuy4g0JHQtdGI0ZHQs9C-0YcsINCi0LDRiNC60LXQvdGCLCBUb3Noa2VudCBTaGFocmksINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707607943635!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{border: "0"}}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <span className="footer_copyright_text">© 2022 Discover Invest. All rights reserved.</span>
      </div>
    </>
  );
};

export default Footer;
