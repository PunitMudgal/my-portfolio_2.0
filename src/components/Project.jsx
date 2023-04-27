import React from "react";
import "../styles/singleProject.css";
import netflix from "../assets/netflix.png";

export default function Project({img, title, liveLink, code}) {

  return (
    <>
      <div className="single-project">
        <img src={img} alt="netfix" />

        {/* hover effert  */}
        <div className="single-project-details">
          <a target="_blank" href={liveLink}>VISIT</a>
          <a target="_blank" href={code}>CODE</a>
        </div>
      </div>
    </>
  );
}
