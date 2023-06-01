import React from "react";
import "./CSS/ImageSlider.css";

const ImageSlider = ({ pictures }) => {
  return (
    <div className="sliderImages">
      {pictures.map((img, index) => (
        <a key={index} href={img.saleLink}>
          <img className="images"  src={img.link} alt="slides" />
        </a>
      ))}
    </div>
  );
};

export default ImageSlider;
