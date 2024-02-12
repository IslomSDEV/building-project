import React from "react";
import "./ProjectM.css";
import MagicCity from "../../assets/Images/city.webp";
import TownCity from "../../assets/Images/magic.webp";

function ProjectM() {
   const PCS = [
    {
      id: 1,
      title: "Magic City",
      info: "Magic city is a large socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.",
      pPhoto: MagicCity,
    },
    {
      id: 2,
      title: "Gardens Residence",
      info: "A grandiose residential quarter in the heart of the capital.",
      pPhoto: TownCity,
    },
    {
      id: 3,
      title: "Magic City",
      info: "Magic city is a large socially significant project. The cultural and entertainment cluster in Tashkent is one of the new attractions.",
      pPhoto: MagicCity,
    },
    {
      id: 4,
      title: "Gardens Residence",
      info: "A grandiose residential quarter in the heart of the capital.",
      pPhoto: TownCity,
    },
  ];

  return (
    <>
      <div className="projectm">
        <div className="container">
          <div className="aboutm_header_box">
            <div className="aboutm_line_y"></div>
            <h2 className="aboutm_headName">Our Projects</h2>
          </div>
          <div className="projectm_flex">
            {PCS.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="projectm_cards"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .5) 60%,rgba(0, 0, 0, 1)), url(${data?.pPhoto})`,
                  }}
                >
                  <div className="projectm_info_box">
                    <h3 className="projectm_cards_title">{data?.title}</h3>
                    <p className="projectm_cards_info">{data?.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="all_projectsm_btn_box">
            <div className="btn_style_con">
              <a href="#">
                <p>
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text dd">All projects</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectM;
