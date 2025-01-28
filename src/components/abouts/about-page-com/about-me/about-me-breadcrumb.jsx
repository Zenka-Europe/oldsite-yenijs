import React from "react";
import bg from '@assets/img/about/banner2.png';

const AboutMeBreadcrumb = () => {
  return (
    <section
      className="about__me about__me-spacing about__me-translate include-bg"
      style={{backgroundImage:`url(${bg.src})`}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div
              className="about__me-content"
            >
              <h1 className="display-2 text-white fw-bold">About Us</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeBreadcrumb;
