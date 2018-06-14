import React from "react";
import "../css/Image-zoom.css";

const imageZoom = ({ kunstwerk, onChange }) => {
  const goBack = e => {
    onChange(e);
  };

  return (
    <div className="image-zoom-container">
      {console.log(kunstwerk)}
      <img
        className="image-zoom"
        alt={kunstwerk.title}
        src={["../", kunstwerk.img].join("")}
      />
      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default imageZoom;
