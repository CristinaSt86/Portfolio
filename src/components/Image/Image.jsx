import React from "react";

const Image = ({ src, alt, className, onClick }) => {
  return (
    <div>
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
    />
    </div>
  );
};


export default Image;
