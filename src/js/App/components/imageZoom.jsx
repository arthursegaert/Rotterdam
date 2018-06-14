import React from "react";
import "../css/Image-zoom.css";

const imageZoom = ({ kunstwerk }) => {
  return (
    <div className="image-zoom-container">
      {console.log(kunstwerk)}
      <img
        className="image-zoom"
        alt={kunstwerk.title}
        src={["../", kunstwerk.img].join("")}
      />
    </div>
  );
};

export default imageZoom;
