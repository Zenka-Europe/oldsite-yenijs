import Image from "next/image";
import Link from "next/link";
import React from "react";

const IndustryDetails = ({ industry }) => {
  const { id, isim, resim, description } = industry || {};
  const paragraphStyle = { textAlign: "justify" };
  
  return (
    <section className="postbox__area grey-bg-4 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="postbox__wrapper">
              <div className="postbox__top">
                <div className="postbox__thumb m-img mb-55">
                  <Image
                    src={resim}
                    width={0}
                    height={0}
                    style={{
                      width: "100%",
                      height: "380px",
                      objectFit: "cover",
                      loader: 'lazy'
                    }}
                    
                    alt="blog img"
                    
                  />
                </div>
              </div>
              <div className="postbox__main">
                <div className="row container">
                  <div className="col-lg-12">
                    <div className="postbox__main-wrapper">
                      <div className="postbox__details-content-wrapper">
                        <h1>{isim}</h1>
                        <pre style={{
                            width: '100%',
                            margin: '0 auto',
                            marginBottom: '20px',
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                            fontFamily: 'Inter',
                            sansSerif: 'Inter', // Specify font family explicitly
                            fontSize: '17px',
                            textAlign: 'justify',
                        }} dangerouslySetInnerHTML={{ __html: description }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetails;
