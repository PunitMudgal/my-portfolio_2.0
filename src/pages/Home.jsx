import React from 'react';
import "../styles/home.css";
import bluebg from '../assets/blue-style.jpg';
import darkblue from '../assets/dark-blue.jpg';
import lightblue from '../assets/light-blue.jpg';

export default function Home() {
  return (
    <div id='home' className='home'>
        <img src={darkblue} alt="bg" />
        <div className='home-content'>
            <h5>HEY, I AM</h5>
            <h1>PUNIT SHARMA</h1>
            <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>

            <a href='#project'>PROJECTS</a>
        </div>
    </div>
  )
}
