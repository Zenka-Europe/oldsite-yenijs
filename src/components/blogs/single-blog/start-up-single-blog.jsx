import Image from "next/image";
import Link from "next/link";
import React from "react";

const StartUpSingleBlog = ({ blog }) => {
  // Original dimensions of the image
const originalWidth = 500; // Replace with the actual width of the image
const originalHeight = 250; // Replace with the actual height of the image

// Calculate the aspect ratio
const aspectRatio = originalWidth / originalHeight;

// Specify the desired height
const desiredHeight = 250;

// Calculate the width based on the aspect ratio and desired height
const calculatedWidth = Math.round(desiredHeight * aspectRatio);
  const { img, date, title, text, tag } = blog || {};

  return (
    <div className="blog__item-7 transition-3 white-bg mb-30">
      <div className="blog__thumb-7 w-img mb-25">
        <Link href={`blog-details/${blog.id}`}>
          <Image
            src={img}
            alt="image"
            width={calculatedWidth}
            height={desiredHeight}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="blog__content-7">
        <h4 className="">
          <Link href={`blog-details/${blog.id}`}>{title} </Link>
        </h4>
        <p>{text.substring(0, 150) + "..."}</p>
        <div className="blog__content-bottom-7 d-flex align-items-center justify-content-between">
          <div className="blog__btn-5">
            <Link
              href={`blog-details/${blog.id}`}
              className="tp-link-btn-circle"
            >
              Read More
              <span>
                <i className="fa-regular fa-arrow-right"></i>
                <i className="fa-regular fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpSingleBlog;