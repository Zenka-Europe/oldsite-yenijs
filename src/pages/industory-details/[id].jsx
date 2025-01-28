import React from 'react';
import { useRouter } from "next/router";
// internal
import { FooterFour, HeaderTwelve, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { blog_items } from "@data/industory";
// Replace with the correct path
import IndustryDetails from '@components/blogs/industry-details/IndustryDetails';

const IndustryDetailsPage = ({ industry }) => {
  const router = useRouter();

  // Extract industry name from route parameters
  const industryId = router.query.id; // Use id for data lookup

  industry = blog_items.find((blog) => blog.id === parseInt(industryId));
  const industryName = industry?.isim; // Use optional chaining to handle potential undefined industry


  return (
    <Wrapper>
      <SEO pageTitle={industryName || "Blog Details"} /> 
      <HeaderTwelve />

      {/* <HomeSliderBanner/> */}
      <div style={{ paddingTop: 167 }}></div>
      <IndustryDetails industry={industry} />
      <FooterFour />
    </Wrapper>
  );
};

export default IndustryDetailsPage;

export async function getStaticPaths() {
  const paths = blog_items.map((blog) => ({ params: { id: blog.id.toString() } }));
  return { paths, fallback: true }; // Enable dynamic routing for unknown IDs
}

export async function getStaticProps({ params }) {
  const industry = blog_items.find((blog) => blog.id === parseInt(params.id));
  return { props: { industry }, revalidate: 60 }; // Revalidate data every 60 seconds
}
