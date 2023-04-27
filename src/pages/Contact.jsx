import React from "react";
import '../styles/contact.css'

function Contact() {
  return (
    <div className="contact section-padding" id="contact">
      <div className="contact-content">
        <h1>CONTACT</h1>
        <div className="underline" />
        <p className="contact-des">Feel free to contact me.</p>
        <form action="" className="box-shadow3">
          <p>Name</p>
          <input type="text" required placeholder="Name"/>
          <p>Email</p>
          <input type="email" required placeholder="Email"/>
          <p>Message</p>
          <textarea placeholder="Enter Message" name="message" id="" cols="75" rows="14"></textarea>
        </form>
      </div>
    </div>
  );
}

export default Contact;
