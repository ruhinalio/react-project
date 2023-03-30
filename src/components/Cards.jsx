import React from "react";
import "./Card.css";
import Photo1 from "../svgs/Rectangle 6.png";
import Photo2 from "../svgs/Rectangle 7.png";

const arr  ={
  Photo1, Photo2
}

const Cards = (props) => {
  const {img,title,text}= props

  return (
    <div>
      <div className="card">
   { <img src={Photo1, Photo2} alt="" />}
        <h3 className="title">{title}</h3>
        <p>{text}</p>
        <p><a href="#"> Read more <i class="fa-solid fa-arrow-right"></i></a></p>
      </div>
    </div>
  );
};

export default Cards;
// img=
// {
//   <img
//     src={src.map((item) => {
//       return item;
//     })}
//     alt=""
//   />
// }