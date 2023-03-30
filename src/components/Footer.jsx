import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer container">
        <p>Copyright © 2021 All rights reserved.</p>
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-solid fa-basketball"></i>
            </a>
          </li>
        </ul>
        <p>Source code available</p>
      </footer>
    </div>
  );
};

export default Footer;
