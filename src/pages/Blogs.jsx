import React from "react";
import "./Blog.css";
import Cards from "../components/Cards";
import Photo1 from "../svgs/Rectangle 6.png";
import Photo2 from "../svgs/Rectangle 7.png";


const Blogs = () => {
  return (
    <div>
      <div className="blogs container">
        <Cards 
        img={Photo1}
        title={"hjsggfkjfggshdf"}
        text={"lorem"}
        />
        <Cards
        img={Photo2}
        title={"hjsggsalamfkjfggshdf"}
        text={"lorembalam"} />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Blogs;
