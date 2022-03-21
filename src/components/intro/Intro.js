import React from "react";
import "./intro.css";
import Me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Sach Patel</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Java</div>
              <div className="i-title-item">Python</div>
              <div className="i-title-item">Django REST API</div>
              <div className="i-title-item">ReactJS</div>
            </div>
          </div>
          <p className="i-desc">
            This website was developed using ReactJS and CSS only and I have used EmailJS for contacting.
          </p>
          
        </div>
      </div>
      <div className="i-right">
          <div className="i-bg"></div>
          <img  src={Me} alt="" className="i-img"/>
      </div>
    </div>
  );
};
export default Intro;
