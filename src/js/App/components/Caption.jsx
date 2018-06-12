import React from "react";

const Caption = ({ caption, userName }) => {
  return (
    <article className="caption">
      <h3 className="caption-content">{caption}</h3>
      <p className="caption-author">{userName}</p>
      <a className="caption-link-sticker" href="#b">
        maak de sticker
      </a>
      <a className="caption-link-share" href="#b">
        deel
      </a>
    </article>
  );
};

export default Caption;
