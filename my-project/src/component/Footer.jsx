import React from "react";
import logo from "../assets/logo.png";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="flogo">
        <img src={logo} alt="logo" />
      </div>
      <div className="c">
        <p>© 2024 Developed By</p> 
        <p> MD SHAZAN MAHMUD ARPON</p>
      </div>
      <div className="social">
        <ul className="social-me">
          <li>
            <a href="https://www.facebook.com/arpon11241/">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://github.com/arpondark/">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/md-shazan-mahmud-arpon">
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;