import React from "react";
import "../styles/footer.css";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-heading">
          <h4>PUINT SHARMA</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            autem, cumque impedit ex labore sit obcaecati{" "}
          </p>
        </div>
        <div className="footer-content-icons">
          <h4>SOCIAL</h4>
          <div className="footer-social-icons">
            <a href="https://www.instagram.com/punitmudgal_/">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.linkedin.com/in/punit-sharma-343160236">
              <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/PunitMudgal">
              <FaGithub size={30} />
            </a>{" "}
            <a href="https://twitter.com/PunitMudgal25">
              <FaTwitter size={30} />
            </a>{" "}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p className="footer-copyright">
          {" "}
          &#169; Copyright 2023. Made By <a href="/">Punit Sharma</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
