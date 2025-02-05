import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';
import Link from 'next/link';
import { AiOutlineCaretRight, AiOutlineCaretLeft, AiFillForward, AiFillBackward } from "react-icons/ai";
import Image from 'next/image';

let hrefManu;

function convertToSlug(inputString) {
  // Replace special characters with empty strings
  let slug = inputString.replace(/[^\w\s&-]/gi, "");
  // Convert to lowercase
  slug = slug.toLowerCase();
  // Replace spaces with dashes
  slug = slug.replace(/\s+&\s+/g, "-"); // Replace space & space with dash
  slug = slug.replace(/&/g, "-"); // Replace & with dash
  slug = slug.replace(/\s+/g, "-"); // Replace remaining spaces with dash
  slug = slug.replace(/-+/g, "-");
  return slug;
}


function Table({ filterProps, filterData, seoName, fields }) {

  
 

  const columns = useMemo(
    () => [
      { Header: 'Image', accessor: 'image' },

      //{ Header: 'LeadFreeStatusRoHSStatus', accessor: 'leadfree' },
      // { Header: 'PartNumber', accessor: 'partnumber' },
      ...fields.filter(column => column.accessor !== 'LeadFreeStatusRoHSStatus' && column.accessor !== 'QuantityAvailable'),
      {
        Header: 'Actions',
        accessor: 'actions',
      },
    ],
    [fields]
  );



  const [deger, setDeger] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: deger ? deger : [],
      manualPagination: true,
      initialState: { pageIndex: 0, pageSize: 30 },
      pageCount: totalPages,
    },
    usePagination
  );

  const fetchBackendData = async (pageIndex, pageSize) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}products/get_products`, { pageIndex, pageSize, filterProps, seoName });
    return {
      data: response.data.result ?? [],
      totalPages: response.data.totalPages,
      pageSize: response.data.pageSize,
      pageIndex: response.data.pageIndex,
    };
  };

  const fetchData = async () => {
    const { data, totalPages } = await fetchBackendData(pageIndex, pageSize);
    setDeger(data);
    // console.log('dataaass', data)
    setTotalPages(totalPages);
  };

  useEffect(() => {
    fetchData();
  }, [pageIndex, pageSize, filterProps, seoName]);

  if (!fields || fields.length === 0) {
    return <div className="custom-loader"></div>; // Veri boş ise alternatif içerik göster
  }
  let manci = "";
  let yukseklik = 0;
  return (
    <>
      <div className=' d-block'>
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className='table table-striped table-xl table-hover ozel_table' {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup, i) => (
                <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, j) => (
                    <th key={j} {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <React.Fragment key={i}>
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell, j) => {
                        if (cell.column.id === 'image') {
                          if (cell.row.original.Image === 'none.png') {
                            manci = cell.row.original.Manufacturer.replace(/\//g, '').replace(/[,.()&%?\/ ]/g, ' ').replace(/ {2,3}/g, ' ').replace(/\s+$/, '').replace(/ /g, '-').toString()
                            // manci = cell.row.original.Manufacturer.replace(/\//g, '').replace(/[&%?\/ ]/g, ' ').replace(/ {2,3}/g, ' ').replace(/ /g, '-').toString()
                            manci = "https://api.zenkaeurope.com/app/resimler/linecard/" + manci + ".jpg";
                            yukseklik = 40
                          } else {
                            manci = `https://api.zenkaeurope.com/app/resimler/${cell.row.original.Image}`
                            yukseklik = 80
                          }

                          return (
                            <td key={j} {...cell.getCellProps()}>
                              <div>
                                <Link href={`/product/${encodeURIComponent(cell.row.original.PartNumber)}-${cell.row.original.urun_id}`}>
                                  <div className="row ">
                                    <div className=" w-100 d-flex justify-content-center">
                                      <Image
                                        src={manci}
                                        alt="Resim"
                                        width={0}
                                        height={0}
                                        style={{ width: 'auto', maxWidth: "150px", height: yukseklik + 'px' }}
                                      />
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            </td>
                          );
                        }
                        else if (cell.column.id === 'PartNumber') {
                          return (
                            <td key={j} {...cell.getCellProps()} className='link-success  borderMavi' style={{ textDecoration: 'none' }} onMouseOver={(e) => { e.currentTarget.style.textDecoration = 'underline'; }} onMouseOut={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
                              <Link href={`/product/${encodeURIComponent(cell.row.original.PartNumber)}-${cell.row.original.urun_id}`}>{cell.row.original.PartNumber}</Link>
                            </td>)
                        }
                        else if (cell.column.id === 'actions') {
                          return (
                            <td key={j} {...cell.getCellProps()} className=''>
                              <Link href={`/product/${encodeURIComponent(cell.row.original.PartNumber)}-${cell.row.original.urun_id}`}><span className='text-sm btn btn-primary '>See More</span></Link>
                            </td>)
                        }
                        else if (cell.column.id == 'Manufacturer') {
                          let slug = convertToSlug(cell.value);
                          hrefManu = `https://zenkaeurope.com/manufacturers/supplier-${slug}`;
                          return (
                            <td key={cell.column.id} {...cell.getCellProps()} className='link-primary borderMavi' style={{ textDecoration: 'none' }} onMouseOver={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
                                onMouseOut={(e) => { e.currentTarget.style.textDecoration = 'none'; }}
                              >
                                <div>
                                  <a href={hrefManu} rel="noopener noreferrer">
                                    {cell.value ?? "-"}
                                  </a>
                                </div>
                              </td>
                          );
                        }else{
                          return (
                            <td key={cell.column.id} {...cell.getCellProps()}>
                              <div>
                                {cell.value ?? "-"}
                              </div>
                            </td>
                          );
                        }
                      })}
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="d-flex align-items-center justify-content-end mb-5 pb-5">
          <div className="me-4 mb-4 pb-5">
            <select
              className='form-select form-select-sm mt-4'
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div className="pb-5">
            <button className='btn btn-light' onClick={() => { gotoPage(0); scrollTo(0, 0); }} disabled={!canPreviousPage}>
              <AiFillBackward />
            </button>{' '}
            <button className='btn btn-light' onClick={() => { previousPage(); scrollTo(0, 0); }} disabled={!canPreviousPage}>
              <AiOutlineCaretLeft />
            </button>{' '}
            <button className='btn btn-light' onClick={() => { nextPage(); scrollTo(0, 0) }} disabled={!canNextPage}>
              <AiOutlineCaretRight />
            </button>{' '}
            <button className='btn btn-light' onClick={() => { gotoPage(pageCount - 1); scrollTo(0, 0); }} disabled={!canNextPage}>
              <AiFillForward />
            </button>{' '}
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {totalPages}
              </strong>{' '}
            </span>
            <span className='ms-2'>
              | Go to page:{' '}
              <input
                min={0}
                max={totalPages}
                type="number"
                className='form-control form-control-sm d-inline'
                defaultValue={pageIndex + 1}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                  scrollTo(0, 0);
                }}
                style={{ width: '100px', height: '20px' }}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
Table.defaultProps = {
  fields: [],
};

export default Table;
