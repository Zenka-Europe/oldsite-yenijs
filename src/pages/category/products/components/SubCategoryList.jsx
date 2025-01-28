import React from 'react';
import Link from 'next/link';
const SubCategoryList = ({ subTitles }) => {

  console.log('değerler', subTitles)
  return (
    <>
      {
        subTitles.map((vals, i) =>
          <div className="row m-2" key={i}>
            <div className="col-6">
              <Link href={`/category-detail/${vals.seo_name}-${vals.id}`}>
                <span className="mt-10 hover:underline text-primary" style={{ whiteSpace: "nowrap", color: "blue", textDecoration: "none" }} onMouseOver={(e) => e.target.style.textDecoration = "underline"} onMouseOut={(e) => e.target.style.textDecoration = "none"}>
                  {vals.name}
                  {/* <small className="text-muted">({vals.active})</small> */}
                </span>
              </Link>
            </div>

          </div>
        )
      }
    </>
  )


}

SubCategoryList.defaultProps = {
  subTitles: [],
};
export default SubCategoryList;
