import React from "react";
import Card from "../components/Card";
import "../styles/about.css";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import css from "../assets/css.png";

export default function About() {
  const skills = [
    { id: 1, image: html },
    { id: 2, image: css },
    { id: 3, image: javascript },
    { id: 4, image: react },
    { id: 5, image: github },
    { id: 6, image: firebase },
    { id: 7, image: tailwind },
  ];

  return (
    <div id="about" className="about section-padding">
      <div className="about-content">
        <div className="about-heading">
          <h1>ABOUT ME</h1>
          <div className="underline" />
          <p>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
        </div>
        <div className="about-sections">
          <div className="about-left-section">
            <h3>Get to know me</h3>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>{" "}
            <br />
            <p>
             My firebase skills are basics, You can check out my work. All the projects which i build are in react.
            </p>{" "}
            <br />
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
          <div className="about-right-section">
            <h3>My Skills</h3>
            <div className="about-right-section-cards">
            {skills.map((cards) => (
              <Card key={cards.id} image={cards.image} />
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
