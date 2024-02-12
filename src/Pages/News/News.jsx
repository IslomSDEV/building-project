import React from "react";
import { Link } from "react-router-dom";
import "./News.css"

function News() {
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
      date: "2022-11-12",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 3,
      date: "2021-12-01",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    },
    {
      id: 4,
      date: "2023-03-11",
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
      date: "2022-10-06",
      info: "Who is the project manager of construction?",
      linkN: "More",
      newPhoto: "",
    }
  ];
  return (
    <>
      <div className="news">
        <div className="container">
          <div className="projects_titleand_info_flex news_db">
            <h2 className="projects_title">News</h2>
            <p className="projects_info">
              We don't just create projects, we create new opportunities. By
              building state-scale facilities, we are building the future. We
              care about the environment:
            </p>
          </div>

          <div className="news_card_flex">
            {
              NDATA.map((data) => {
                return(
                  <div key={data?.id} className="newm_slide_cards news_cards_p">
                    <span className="news_card_date">{data?.date}</span>
                    <div className="new_slide_incard">
                      <p className="newm_slide_info">{data?.info}</p>
                      <Link className="newm_slide_link">{data?.linkN}</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
