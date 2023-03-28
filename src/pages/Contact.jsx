import React from "react";
import "./Contact.css";
import Saly14 from "../svgs/Saly-14.png";
const Contact = () => {
  return (
    <div>
      <div className="contact container">
        <div className="contact-left">
          <img src={Saly14} alt="" />
        </div>
        <div className="contact-right">
          <h2>You can reach me any time🙂</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
            <br />
            Twitter: amirhwsin <br />
            Github: amireshoon <br />
            Dribble: amireshoon <br />
            Telegram: GeekDreamer <br />
            Email: amirhwsin@outlook.com
          </p>
          <div className="introduce-bottom">
          <button className="about-btn">About Me</button>
          <button className="portfolio-btn">😮 Let’s see portfolios</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
