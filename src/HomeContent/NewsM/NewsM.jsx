import React from "react";
import "./NewsM.css";

import Slider from "react-slick";
import { Link } from "react-router-dom";

function NewsM() {
  const NDATA = [
    {
      id: 1,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 2,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 3,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 4,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 5,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 6,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 7,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 8,
      date: "2022-10-02",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="newm">
        <div className="container">
          <div className="aboutm_header_box">
            <div className="aboutm_line_y"></div>
            <h2 className="aboutm_headName">Our News</h2>
          </div>
          <div className="newm_flex">
            <div className="slider-container">
              <Slider className="newm_slide_r" {...settings}>
                {NDATA.map((data) => {
                  return (
                  <div className="newm_slide_cards">
                    <div className="new_slide_incard">
                      <p className="newm_slide_info">{data.info}</p>
                      <Link className="newm_slide_link">{data.linkN}</Link>
                    </div>
                  </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className="all_projectsm_btn_box">
            <div className="btn_style_con">
              <a href="#">
                <p>
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text dd">All News  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsM;
