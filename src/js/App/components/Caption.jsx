import React from "react";
import "../css/Caption.css";

const Caption = ({ caption, userName, likes }) => {
  return (
    <article className={`caption`}>
      <h3 className="caption-content">{caption}</h3>
      <p className="caption-author">{userName}</p>
      <a className="caption-link-sticker" href="#b">
        maak de sticker
      </a>
      <a className="caption-link-share" href="#b">
        deel
      </a>
      <p>{likes} likes</p>
      <a>
        <svg className="heart-icon" viewBox="0 0 159.1 145.8">
          <defs />
          <title>Artboard 1</title>
          <g>
            <path
              className="inner-heart"
              d="M143.8,46.2c0.1,8.8-3.3,17.2-9.6,23.4l-54.7,54.7l-0.1-0.1l-0.1,0.1L24.8,69.6c-6.2-6.2-9.7-14.6-9.6-23.4
         c0-8.4,3.5-16.4,9.5-22.2c12.4-11.9,32-11.7,44.1,0.5l0.1,0.1l10.6,10.6l10.6-10.6l0.1-0.1c5.9-5.9,13.9-9.3,22.3-9.2
         c8.1,0,16,3.1,21.8,8.8C140.4,29.8,143.8,37.8,143.8,46.2z"
            />
            <path
              fill="#fff"
              d="M144.8,13.3c18.9,18.1,18.6,48.5,0.1,67l-65.3,65.2l-0.1-0.1l-0.1,0.1L14.2,80.2c-18.5-18.5-18.8-48.8,0.1-67
         C32.6-4.3,61.6-4,79.5,13.9l0.1,0.1l0.1-0.1c8.7-8.7,20.6-13.6,32.9-13.6l0.1,0C124.6,0.3,136.1,4.9,144.8,13.3z M134.3,69.6
         c6.2-6.2,9.7-14.6,9.6-23.4c0-8.4-3.4-16.4-9.5-22.2c-5.9-5.6-13.7-8.8-21.8-8.8c-8.4,0-16.4,3.3-22.3,9.2l-0.1,0.1L79.5,35.2
         L68.9,24.6l-0.1-0.1C56.7,12.4,37.1,12.2,24.7,24c-6,5.8-9.5,13.8-9.5,22.2c-0.1,8.8,3.3,17.2,9.6,23.4l54.6,54.6l0.1-0.1l0.1,0.1
         L134.3,69.6z"
            />
          </g>
        </svg>
      </a>
    </article>
  );
};

export default Caption;
