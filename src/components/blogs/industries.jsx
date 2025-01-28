import React from 'react';
import Link from 'next/link';
// internal
import blog_data from '@data/blog-data';
import StartUpSingleBlog from './single-blog/start-up-single-list.jsx';
import HighlightShapeThree from '@svg/highlight-shape-3';


export const blog_items = [
  {
    id: 1,
    resim: "assets/img/fwdindustriesweserve/industrialelectronics.webp",
    isim: "Industrial Electronics",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
  },
  {
    id: 2,
    resim: "assets/img/fwdindustriesweserve/medical.webp",
    isim: "Medical Devices",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  },
  {
    id: 3,
    resim: "assets/img/fwdindustriesweserve/marine.webp",
    isim: "Marine",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  }
  ,
  {
    id: 4,
    resim: "assets/img/fwdindustriesweserve/batteryrecharger.webp",
    isim: "Battery/Charge",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  },
  {
    id: 5,
    resim: "assets/img/fwdindustriesweserve/aerospace.webp",
    isim: "Aerospace/Aviation",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  },
  {
    id: 6,
    resim: "assets/img/fwdindustriesweserve/renewable.webp",
    isim: "Renewable Energy",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  },
  {
    id: 7,
    resim: "assets/img/fwdindustriesweserve/automative.webp",
    isim: "Automotive",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  },
  {
    id: 8,
    resim: "assets/img/fwdindustriesweserve/consumerdev.webp",
    isim: "Consumer Electronics",
    decription: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"

  }
];


const StartUpBlogs = () => {
  return (
    <>
      <section className="blog__area blog__border-7 pb-115">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12 col-md-12">
              <div className="blog__section-title-7">
                <div className="section__title-wrapper-4 mb-20 text-center">
                  {/* <span className="section__title-pre-4">Resources</span> */}
                  <h1 className="">Industries We Serve</h1>
                  {/* <p>Every now and then we’ll lay down some opinion or business insight.</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row tp-gx-6">
            {blog_items.map((blog) => (
              <div key={blog.id} className="col-xxl-3 col-lg-3 col-md-6 ">
                <StartUpSingleBlog blog={blog} />
              </div>
            ))}
            <div className="col-xxl-12 text-center ">
              <div className="cta__btn-5 text-lg-center">
                <Link href="/contact" className="tp-btn-orange-2">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default StartUpBlogs;