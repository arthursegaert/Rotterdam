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
      <svg
        className="back-arrow-svg"
        onClick={goBack}
        viewBox="0 0 512 512"
        width="100"
      >
        <path
          className="back-arrow"
          d="M167.2,430.6c7,7.2,18.6,7.2,25.8,0c7-7,7-18.6,0-25.5L62.2,274.2h431.7c10.1,0,18.1-8,18.1-18.1
	c0-10.1-8-18.3-18.1-18.3H62.2L193,107.2c7-7.2,7-18.8,0-25.8c-7.2-7.2-18.8-7.2-25.8,0L5.4,243.2c-7.2,7-7.2,18.6,0,25.5
	L167.2,430.6z"
        />
      </svg>
    </div>
  );
};

export default imageZoom;
