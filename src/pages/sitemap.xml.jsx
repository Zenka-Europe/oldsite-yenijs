import React from "react";

const generateSitemapXml = () => {
  const xmlString = `<?xml version='1.0' encoding='UTF-8'?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <sitemap>
        <loc>https://zenkaeurope.com/general.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/manufacturers.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/categories.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product0.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product1.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product2.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product3.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product4.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product5.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product6.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product7.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product8.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product9.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product10.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product11.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product12.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product13.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product14.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product15.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product16.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product17.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product18.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product19.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product20.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product21.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product22.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product23.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product24.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product25.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product26.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product27.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product28.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product29.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product30.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product31.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product32.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product33.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product34.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product35.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product36.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product37.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product38.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product39.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product40.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product41.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product42.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product43.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product44.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product45.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product46.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product47.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product48.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product49.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product50.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product51.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product52.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product53.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product54.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product55.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product56.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product57.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product58.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product59.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product60.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product61.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product62.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product63.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product64.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product65.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product66.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product67.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product68.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product69.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product70.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product71.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product72.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product73.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product74.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product75.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product76.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product77.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product78.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product79.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product80.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product81.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product82.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product83.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product84.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product85.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product86.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product87.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product88.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product89.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product90.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product91.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product92.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product93.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product94.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product95.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product96.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product97.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product98.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product99.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product100.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product101.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product102.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product103.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product104.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product105.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product106.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product107.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product108.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product109.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product110.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product111.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product112.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product113.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product114.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product115.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product116.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product117.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product118.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product119.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product120.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product121.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product122.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product123.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product124.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product125.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product126.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product127.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product128.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product129.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product130.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product131.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product132.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product133.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product134.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product135.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product136.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product137.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product138.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product139.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product140.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product141.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product142.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product143.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product144.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product145.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product146.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product147.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product148.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product149.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product150.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product151.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product152.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product153.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product154.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product155.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product156.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product157.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product158.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product159.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product160.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product161.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product162.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product163.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product164.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product165.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product166.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product167.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product168.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product169.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product170.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product171.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product172.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product173.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product174.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product175.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product176.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product177.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product178.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product179.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product180.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product181.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product182.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product183.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product184.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product185.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product186.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product187.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product188.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
      <sitemap>
        <loc>https://zenkaeurope.com/product189.xml</loc>
        <lastmod>2023-12-13T09:36:47+01:00</lastmod>
      </sitemap>
    </sitemapindex>
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