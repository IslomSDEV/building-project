import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_flex">
            <div className="hero_theme_inf">
              <h1 className="hero_title">DISCOVER INVEST</h1>
              <p className="hero_theme_text">Perfection in everything</p>

              <div className="btn_box">
                <div className="btn_style_con">
                  <a href="#">
                    <p>
                      <span className="bg"></span>
                      <span className="base"></span>
                      <span className="text">Projects</span>
                    </p>
                  </a>
                </div>
                <div className="btn_style_con-s">
                  <a href="#">
                    <p>
                      <span className="bg"></span>
                      <span className="base"></span>
                      <span className="text">Contact</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="kmacb">
        <a modal="kmacb-form" href="#" title="Перезвонить Вам">
          <div class="kmacb-circle"></div>
          <div class="kmacb-circle-fill"></div>
          <div class="kmacb-img-circle"></div>
        </a>
      </div>
    </>
  );
}

export default Hero;
