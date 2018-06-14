import React from "react";

const imageZoom = ({ kunstwerk }) => {
  return (
    <div>
      {console.log(kunstwerk)}
      <img alt={kunstwerk.title} src={["../", kunstwerk.img].join("")} />
    </div>
  );
};

export default imageZoom;
