import React from "react";
import "./Section0.css";

function Section0() {
  return (
    <div className="section0-container">
      <div className="section0-container-left">
        <div className="section0-container-left-up">
          <img src="./pics/profile-pic.jpg" alt="Profile pic" />
        </div>
        <div className="section0-container-left-down">
          <h2>
            Meet an imaginative architect with a flair for transforming spaces.
            With a Master's in Architecture and expertise in interior design, I
            blend creativity and functionality to craft captivating
            environments. From concept to completion, I thrive on bringing
            visions to life, creating spaces that inspire and captivate. Let's
            build something extraordinary together.
          </h2>
        </div>
      </div>
      <div className="section0-container-right">
        <div className="section0-container-right-up">
          <h2>
            Here's the stack of programs i'm currently working with but that
            doesn't stop me from always learning more.
          </h2>
        </div>
        <div className="section0-container-right-down">
          <img
            src="./pics/420990221_349396254661534_5592519099418513154_n.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Section0;
