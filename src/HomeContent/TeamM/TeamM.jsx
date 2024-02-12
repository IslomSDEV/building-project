import React from "react";
import Slider from "react-slick";
import "./TeamM.css";
import Man1 from "../../assets/Images/man1.webp";
import Man2 from "../../assets/Images/man2.webp";
import Man3 from "../../assets/Images/man3.webp";
import Man4 from "../../assets/Images/man4.webp";

function TeamM() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1 ,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <>
      <div className="teamm">
        <div className="container">
          <div className="aboutm_header_box">
            <div className="aboutm_line_y"></div>
            <h2 className="aboutm_headName">Our Team</h2>
          </div>
          <div className="teamm_flex">
            <Slider {...settings}>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man1} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man2} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man3} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man4} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man1} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
              <div className="slick_card">
                <div className="img_boc_team">
                    <img src={Man3} alt="sas" />
                </div>
                <div className="job_and_name">
                    <h3 className="team_name">Kuziyev Javohir</h3>
                    <h4 className="team_job">Project Menejer</h4>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamM;
