import Head from "next/head";
import React from "react";

const SEO = ({
  pageTitle,
  partNumber,
  description,
  keywords,
  productImages,
  isProductPage,
  productCategory,
  productSubCategory,
  manufacturer,
}) => {
  const languages = ["en"];
  const baseUrl = "https://zenkaeurope.com/";
  const generalDescription =
    "Zenka Europe UAB: B2B Leader in Electronic Components & Manufacturing. Explore a vast range of Electronics: ICs, Resistors, Capacitors & more, We Have It All!";
  const generalKeyword =
    "Zenka Europe UAB, electronic components, electronic parts, electronic component distributor, electronic component distributors, electronic component, buy electronic component, buy electronic components, electronic components distributor, electronic parts distributor, electronic components distributors";

  const structuredData = isProductPage
    ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: pageTitle,
        description: `${productCategory || ""} ${productSubCategory || ""} ${
          manufacturer || generalDescription
        }`,
        image: "",
        logo: { productImages },
        brand: {
          "@type": "Electronic",
          name: manufacturer,
        },
        sku: partNumber,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          bestRating: "5",
          worstRating: "0",
          ratingCount: "36",
        },
      }
    : {
        "@context": "https://schema.org/",
        "@type": "Website",
        name: "Zenka Europe UAB",
        description: generalDescription,
        url: "https://zenkaeurope.com",
        logo: "https://zenkaeurope.com/_next/static/media/logo.49c3aadf.png",
      };

  return (
    <React.Fragment>
      {`<!DOCTYPE html>`}
      <Head>
        {pageTitle && <title>{`${pageTitle}`}</title>}
        <meta
          name="description"
          content={
            description ||
            ` ${generalDescription}, ${
              partNumber ? ` - Part Number: ${partNumber}` : ""
            }`
          }
        />
        <meta
          name="keywords"
          content={
            keywords ||
            (partNumber
              ? `${partNumber}, ${manufacturer}, ${generalKeyword}`
              : generalKeyword)
          }
        />
        <meta name="robots" content="index, follow" />
        <meta data-n-head="ssr" name="Author" content="Zenka Europe UAB" />

        {languages.map((lang) => (
          <React.Fragment key={lang}>
            <link
              rel="alternate"
              hrefLang={lang}
              href={`${baseUrl}?lang=${lang}`} // Point to URLs with query parameters
            />
            {lang === "en-US" && <link rel="canonical" href={`${baseUrl}`} />}{" "}
            
          </React.Fragment>
        ))}

        {structuredData && (
          <script type="application/ld+json">
            {" "}
            {JSON.stringify(structuredData)}{" "}
          </script>
        )}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta
          property="og:type"
          content={isProductPage ? "product" : "Zenka Europe UAB"}
        />

        {isProductPage ? (
          <meta property="og:image" content={productImages} />
        ) : (
          <meta
            property="og:image"
            content="https://zenkaeurope.com/_next/static/media/logo.49c3aadf.png"
          />
        )}
        <meta property="og:image:alt" content="Zenka Europe Logo" />
        <meta property="og:type" content="website" />
      </Head>
    </React.Fragment>
  );
};

export default SEO;
