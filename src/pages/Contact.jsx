import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="contact section-padding" id="contact">
      <div className="contact-content">
        <h1>CONTACT</h1>
        <div className="underline" />
        <p className="contact-des">Feel free to contact me.</p>
        <form
          action="https://formspree.io/f/mzbqynng"
          className="box-shadow3"
          method="POST"
        >
          <p>Name</p>
          <input
            type="text"
            name="username"
            required
            placeholder="Enter Your Name"
          />
          <p>Email</p>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
          />
          <p>Message</p>
          <textarea
            name="message"
            placeholder="Enter Message..."
            id="textarea"
            rows="14"
          ></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
