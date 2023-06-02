import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import "./Recommendations.css";
import "./Flip.css";
import Stack from "@mui/material/Stack";
import StarRating from "../components/StarRating";

const Recommendations = () => {
  //const [flip, setFlip] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pagesPerItem = 6;
  let dataMock = require("./mock-user.json");

  // Fetch data
  useEffect(() => {
    async function fetchData() {
      const user_id = localStorage.getItem('user_id')
      const response = await fetch(
        `https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/recommendations/${user_id}`
      );
      const jsonData = await response.json();
      // console.log(jsonData);
      setData(jsonData);
    }
    fetchData();
  }, []);

  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the number between 0 and 2
      setNumber((prevNumber) => (prevNumber === 0 ? 2 : 0));
    }, 5000); // Change the interval as per your requirements (in milliseconds)

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const renderElements = (startRange, endRange) => {
    const elements = [];
    for (let i = startRange; i <= endRange; i++) {
      const restaurant_id = Object.values(data[i])[0];
      elements.push(
        <li className="cards_item">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Object.values(data[i])[12][number]}
                    alt="Restaurant Image"
                    className="CardImg"
                  />
                  <h3 style={{ color: "#ffc107" }}>
                    {Object.values(data[i])[6]}
                  </h3>
                </div>
                <div className="flip-card-back" style={{ color: "#2a2a2a" }}>
                  <h3>{Object.values(data[i])[6]}</h3>
                  <div className="grid-container-card-back">
                    <div className="grid-item-card-back row-span-all border-line">
                      {Object.values(data[i])[8]}
                    </div>
                    <div className="grid-item-card-back row-span-all" />
                    <div className="grid-item-card-back picture-double-card-back">
                      <img
                        src={require("../assets/location-24.png")}
                        alt="LocationIcon"
                      />
                    </div>
                    <div className="grid-item-card-back">
                      {Object.values(data[i])[2]}
                    </div>
                    <div className="grid-item-card-back">
                      {Object.values(data[i])[10]}
                    </div>
                    {Object.values(data[i])[1] ? (
                      <>
                      <div className="grid-item-card-back picture-card-back">
                        <img src={require("../assets/world-wide-web.png")} alt="Website Icon" />
                      </div>
                      <div className="grid-item-card-back">
                        <a href={Object.values(data[i])[1]} className="websiteLink">Click to visit their website!</a>
                      </div>
                    </>
                    ) : (
                      <></>
                    )}
                    {Object.values(data[i])[9] ? (
                      <>
                        <div className="grid-item-card-back picture-card-back">
                          <img src={require("../assets/phone-call.png")} alt="Phone Icon" />
                        </div>
                        <div className="grid-item-card-back">
                          {Object.values(data[i])[9]}
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <h4>General Rating: {Object.values(data[i])[7]}</h4>
                  <StarRating
                    restaurant_id={restaurant_id}
                    user_id={localStorage.getItem("user_id")}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }

    return elements;
  };

  return (
    <div className="App-body" style={{"margin-bottom": "4rem"}}>
      <div>
        {data ? (
          <div>
            <Stack alignItems="center">
              <ul className="cards">
                {renderElements(
                  (page - 1) * pagesPerItem,
                  Math.min(
                    (page - 1) * pagesPerItem + pagesPerItem - 1,
                    Object.keys(data).length - 1
                  )
                )}
              </ul>
              <Pagination
                count={Math.ceil(Object.keys(data).length / pagesPerItem)}
                showFirstButton
                showLastButton
                page={page}
                onChange={handleChange}
              />
            </Stack>
          </div>
        ) : (
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "2em",
              color: "#444",
            }}
          >
            Getting your recommendations...
          </p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
