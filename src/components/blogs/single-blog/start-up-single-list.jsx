import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const StartUpSingleBlog = ({ blog }) => {
  const originalWidth = 500; // Replace with the actual width of the image
  const originalHeight = 250; // Replace with the actual height of the image
  const aspectRatio = originalWidth / originalHeight;
  const desiredHeight = 250;

  // Calculate the width based on the aspect ratio and desired height
  const calculatedWidth = Math.round(desiredHeight * aspectRatio);
  const { id, isim, resim } = blog || {};
  const [isHovered, setIsHovered] = useState(false);
  const hoverStyles = {
    transition: "0.3s ease-in-out",
    boxShadow: isHovered ? "0px 3px 6px rgba(0, 0, 0, 0.5)" : "none",
    padding: "10px",
    borderRadius: isHovered ? "10px" : "0",
  };

  return (
    <Link href={`/industory-details/${id}`}>
      <div
        className="transition-3 white-bg mb-30"
        style={hoverStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-img mb-25">
          <Image
            src={resim}
            alt="image"
            width={calculatedWidth}
            height={desiredHeight}
            loading="lazy"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="blog__content-7 cizgiler">
          <h4
            className="text-center"
            style={{ color: "#4eba65", padding: "5px" }}
          >
            {isim}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default StartUpSingleBlog;
