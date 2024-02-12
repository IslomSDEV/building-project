import React from "react";
import "./Contact.css";
import { IoMdArrowRoundDown } from "react-icons/io";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contacts_flex">
            <div className="contact_info_box">
              <h2 className="contact_title">Contacts</h2>
              <p className="contacts_text">
                Leave your contacts by filling out the current form and we will
                contact you as soon as possible.
              </p>
              <button className="contact_bottom_btn">
              <IoMdArrowRoundDown className="contact_arrow_icon" />{" "}
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
