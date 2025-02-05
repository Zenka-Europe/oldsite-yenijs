import React from "react";
// internal
import bg from '@assets/img/contact/contact-bg.png';

const SectionArea = ({title,subtitle}) => {
  return (
    <section className="tp-section-area p-relative z-index-1 tp-section-spacing">
      <div
        className="tp-section-bg include-bg"
        style={{backgroundImage:`url(${bg.src})`}}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="tp-section-wrapper-2 text-center">
              <h1 className="tp-section-title-2 font-70">{title}</h1>
              <p>
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionArea;
