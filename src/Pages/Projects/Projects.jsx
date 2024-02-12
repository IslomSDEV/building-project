import React from "react";
import "./Projects.css";
import MagicCity from "../../assets/Images/city.webp";
import TownCity from "../../assets/Images/magic.webp";

function Projects() {
  const projectData = [
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
  ];
  return (
    <>
      <div className="projects">
        <div className="container">
          <div className="projects_titleand_info_flex">
            <h2 className="projects_title">Projects</h2>
            <p className="projects_info">
              We don't just create projects, we create new opportunities. By
              building state-scale facilities, we are building the future. We
              care about the environment:
            </p>
          </div>
          <div className="projects_card_flex">
            {projectData.map((data) => {
              return (
                <div
                  key={data?.id}
                  className="projectm_cards"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .1) 60%,rgba(0, 0, 0, 1)), url(${data?.pPhoto})`,
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
        </div>
      </div>
    </>
  );
}

export default Projects;
