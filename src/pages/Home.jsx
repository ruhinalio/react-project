import React from "react";
import "./Home.css";
import Saly13 from "../svgs/Saly-13.png";
import Saly8 from "../svgs/Saly-8.png";

const Home = () => {
  return (
    <div>
      <section className="introduce container">
        <div className="introduce-top">
          <img src={Saly13} alt="" className="saly-13" />
          <div className="image-side"></div>
          <h1>
            Hey there 👋 <br />I am Amirhossein
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="introduce-bottom">
          <button className="about-btn">About Me</button>
          <button className="portfolio-btn">😮 Let’s see portfolios</button>
        </div>
        <img src={Saly8} alt="" className="saly-8" />
      </section>
    </div>
  );
};

export default Home;
