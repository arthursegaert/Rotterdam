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
      <a>{likes} likes</a>
    </article>
  );
};

export default Caption;
