import React from "react";
import "../styles/home.css";
import darkblue from "../assets/dark-blue.jpg";
import compresed from "../assets/dark-blue-compresed.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Home() {
  return (
    <div id="home" className="home">
      {/* <img src={compresed} alt="bg" /> */}
      <LazyLoadImage
        className="home-image"
        src={darkblue}
        placeholderSrc={compresed}
        effect="blur"
      />
      <div className="home-content">
        <h5>HEY, I AM</h5>
        <h1>PUNIT SHARMA</h1>
        <p>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>

        <a href="#project">PROJECTS</a>
      </div>
    </div>
  );
}
