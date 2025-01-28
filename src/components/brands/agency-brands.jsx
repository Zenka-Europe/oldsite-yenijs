// external
import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
// internal
import ElBrandSectionWrapper from "@elements/elements-brand/el-brand-section-wrapper";
import brand_1 from "@assets/img/brand/5/attach/3m.webp";
import brand_2 from "@assets/img/brand/5/attach/ABB.webp";
import brand_3 from "@assets/img/brand/5/attach/ad.webp";
import brand_4 from "@assets/img/brand/5/attach/Amphenol.webp";
import brand_5 from "@assets/img/brand/5/attach/bosch.webp";
import brand_6 from "@assets/img/brand/5/attach/bourns.webp";
import brand_7 from "@assets/img/brand/5/attach/connor winfield.webp";
import brand_8 from "@assets/img/brand/5/attach/Diodes.webp";
import brand_9 from "@assets/img/brand/5/attach/Epson.webp";
import brand_10 from "@assets/img/brand/5/attach/honeywell.webp";
import brand_11 from "@assets/img/brand/5/attach/intel.webp";
import brand_12 from "@assets/img/brand/5/attach/Littlefuse.webp";
import brand_13 from "@assets/img/brand/5/attach/Macom.jpg";
import brand_14 from "@assets/img/brand/5/attach/Maxlinear.webp";
import brand_15 from "@assets/img/brand/5/attach/Maxwell.webp";
import brand_16 from "@assets/img/brand/5/attach/Melexis.png";
import brand_17 from "@assets/img/brand/5/attach/Microchip.webp";
import brand_18 from "@assets/img/brand/5/attach/molex.png";
import brand_19 from "@assets/img/brand/5/attach/Murata.webp";
import brand_20 from "@assets/img/brand/5/attach/nxp.webp";
import brand_21 from "@assets/img/brand/5/attach/Silicon Labs.webp";
import brand_22 from "@assets/img/brand/5/attach/stm.png";
import brand_23 from "@assets/img/brand/5/attach/TDK.png";
import brand_24 from "@assets/img/brand/5/attach/TE Connectivity.png";
import brand_25 from "@assets/img/brand/5/attach/Vishay.png";
import brand_26 from "@assets/img/brand/5/attach/xilinx.png";
// import Link from "next/link";

// slider setting 1
const settings_1 = {
  speed: 4000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  pauseOnFocus: false,
  pauseOnHover: true,
};

const settings_2 = {
  speed: 3000,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  arrows: false,
  buttons: false,
};

const manufacLink = "manufacturers/supplier-";

// data
const brand_1_data = [
  { brand: brand_1, link: manufacLink + "3m" },
  { brand: brand_2, link: "" },
  { brand: brand_3, link: manufacLink + "adi-analog-devices-inc" },
  { brand: brand_4, link: manufacLink + "amphenol-ltw" },
  {
    brand: brand_5,
    link: manufacLink + "bosch-connected-devices-and-solutions",
  },
  { brand: brand_6, link: manufacLink + "bourns-inc" },
  { brand: brand_7, link: manufacLink + "connor-winfield" },
  { brand: brand_8, link: manufacLink + "diodes-incorporated" },
  { brand: brand_20, link: manufacLink + "nexperia" },
  {
    brand: brand_21,
    link: manufacLink + "energy-micro-silicon-labs",
  },
  { brand: brand_22, link: manufacLink + "stmicroelectronics" },
  { brand: brand_23, link: manufacLink + "tdk-corporation" },
  {
    brand: brand_24,
    link: manufacLink + "tyco-electronics",
  },
  { brand: brand_25, link: manufacLink + "dale-vishay" },
  { brand: brand_26, link: manufacLink + "xilinx" },
];
const brand_2_data = [
  { brand: brand_9, link: manufacLink + "epson" },
  { brand: brand_10, link: manufacLink + "clarostat-honeywell-sensing-and-productivity-solu" },
  { brand: brand_11, link: manufacLink + "intel-fpgas" },
  { brand: brand_12, link: manufacLink + "hamlin-littelfuse" },
  { brand: brand_13, link: manufacLink + "aeroflex-macom-technology-solutions" },
  { brand: brand_14, link: manufacLink + "" },
  { brand: brand_15, link: manufacLink + "maxwell-technologies-inc" },
  { brand: brand_16, link: manufacLink + "melexis" },
  { brand: brand_17, link: manufacLink + "micrel-microchip-technology" },
  { brand: brand_18, link: manufacLink + "affinity-medical-technologies-a-molex-company" },
  { brand: brand_19, link: manufacLink + "murata-electronics" },
];

const AgencyBrands = ({
  style_2 = false,
  spacing = false,
  element_style = false,
  square = "",
}) => {
  const sliderRef = useRef();
  let autoplayOn = true;
  let autoplaySpeed = 0;
  useEffect(() => {
    setInterval(function () {
      if (!autoplayOn) return;
      sliderRef?.current?.slickPrev();
    }, autoplaySpeed);
  }, [autoplayOn, autoplaySpeed]);

  return (
    <>
      <section
        id="manufactures"
        className={`brand__area ${spacing ? "pb-120" : ""} ${
          element_style ? "pt-110 pb-120" : ""
        }`}
      >
        <div className="container-fluid g-0">
          {!style_2 && !element_style && (
            <div className="row gx-0">
              <div className="col-xxl-12">
                <div className=" text-center mb-20 my-4 ">
                  <span className="fst-normal text-black  display-6 ">
                    Manufacturers
                  </span>
                </div>
              </div>
            </div>
          )}
          {element_style && (
            <ElBrandSectionWrapper
              cls="gx-0"
              subtitle="Modern &amp; Clean Design"
              title="Brand Rounded Slider"
            />
          )}
          <div className="row gx-0 gy-2">
            <div className="col-xxl-12">
              <div className={`brand__slider-5 ${square ? square : ""}`}>
                <div className="brand__slider-5">
                  <Slider {...settings_1} >
                    {brand_1_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <a href={brand.link}>
                          <Image
                             width={200}
                             height={80}
                             src={brand.brand}
                             alt="brand"
                             loading="lazy"
                          />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className={`brand__slider-5-1 ${square ? square : ""}`}>
                <div className="brand__slider-5">
                  <Slider
                    {...settings_2}
                    ref={sliderRef}
                  >
                    {brand_2_data.map((brand, i) => (
                      <div key={i} className="brand__item-5">
                        <a href={brand.link}>
                          <Image
                            width={200}
                            height={80}
                            src={brand.brand}
                            alt="brand"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AgencyBrands;
