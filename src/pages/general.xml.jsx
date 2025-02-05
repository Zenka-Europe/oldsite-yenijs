import React from "react";

const generateSitemapXml = () => {
  const xmlString = `<?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://zenkaeurope.com/</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/1</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/2</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/3</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/4</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/5</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/6</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/7</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/8</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/9</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/10</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/11</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/12</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/13</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/14</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog-details/15</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/contact</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/about-us</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/privacy-policy</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/terms-and-conditions</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/rfq</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/manufacturers</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/careers</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog?page=1</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog?page=2</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/blog?page=3</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/1</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/2</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/3</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/4</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/5</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/6</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/7</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
      <url>
        <loc>https://zenkaeurope.com/industory-details/8</loc>
        <lastmod>2023-11-09T14:13:08+00:00</lastmod>
        <priority>0.64</priority>
      </url>
    </urlset>
 `;

 return xmlString;
};

const Sitemap = () => null;

export const getServerSideProps = async ({ res }) => {
 res.setHeader("Content-Type", "application/xml");
 res.write(generateSitemapXml());
 res.end();

 return {
   props: {},
 };
};

export default Sitemap;
