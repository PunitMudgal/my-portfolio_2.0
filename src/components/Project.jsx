import React from "react";
import "../styles/singleProject.css";
// import netflix from "../assets/netflix.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Project({ img, liveLink, code, compresedImg, title }) {
  return (
    <>
      <div className="single-project box-shadow2">
        {/* <img src={img} alt="netfix" /> */}
        <LazyLoadImage
          src={img}
          placeholderSrc={compresedImg}
          effect="blur"
          className="single-project-image"
          alt={title}
        />

        {/* hover effert  */}
        <div className="single-project-details">
          <a target="_blank" href={liveLink}>
            VISIT
          </a>
          <a target="_blank" href={code}>
            CODE
          </a>
        </div>
      </div>
    </>
  );
}
