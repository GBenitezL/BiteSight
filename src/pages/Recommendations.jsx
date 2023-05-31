import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import "./Recommendations.css";
//import "./Flip.css";

const Recommendations = () => {
  //const [flip, setFlip] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/recommendations/0DbuPoSWLnsOpBWsuA8B"
      );
      const jsonData = await response.json();
      //console.log(jsonData);
      setData(jsonData);
    }
    fetchData();
  }, []);

  /* Data Indexes:
      0 - website (Hay nulos)
      1 - city
      2 - imagesCount
      3 - description (Hay nulos)
      4 - reviewsCount
      5 - title
      6 - totalScore
      7 - categoryName
      8 - phone (Hay nulos)
      9 - street
      10 - price (Hay nulos)
      11 - imageUrls (Es otro array con 3 fotos)
      12 - location
      13 - categories (Otro array)
  */

  return (
    <div className="App-body">
      {/*
      {data ? (
        <ul className="cards">
          {data.map((item) => (
            <li className="cards_item">
              <div className="card">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img src={(Object.values(item)[11][0])} alt={Object.values(item)[11][0]} className="CardImg" />
                    </div>
                    <div className="flip-card-back">
                      <h1>{Object.values(item)[5]}</h1>
                      <h2>{Object.values(item)[1]}</h2>
                      <h2>{Object.values(item)[6]}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}*/}
      <div>
        {data ? (
          <div>
            <p>startIndex: {((page - 1) * 3)}</p>
            <p>endIndex: {(Math.min(((page - 1) * 3) + 3 - 1, Object.keys(data).length - 1))}</p>
            <Pagination
              count={Math.ceil(Object.keys(data).length / 3)}
              showFirstButton
              showLastButton
              page={page}
              onChange={handleChange}
            />
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
