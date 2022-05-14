import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGLC45w7YqwmVU0LJG5xoeaMuM51kjUgpj13O7tan_16-mf8EFJQPPKgqJ4KF32T-lxV-pIEasj1tq/pub?gid=0&single=true&output=csv";

const Data = ({ userDetails, setUserDetails }) => {

  useEffect(() => {
    Papa.parse(url, {
      download: true,
      header: true,
      complete: (results) => {
        setUserDetails(results.data);
        console.log(results);
      },
    });
  }, []);

  return "";
  // const movies = Array.from(data);
  // return (
  //   <ul>
  //     {movies.map((data) => (
  //       <li key={data.no}>
  //         {data.name} ({data.name}) - Details {data.no}
  //       </li>
  //     ))}
  //   </ul>
  // );
};
export default Data;
