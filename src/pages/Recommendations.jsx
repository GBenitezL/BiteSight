import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import "./Recommendations.css";
import "./Flip.css";
import Stack from "@mui/material/Stack";
import StarRating from "../components/StarRating";

// const Recommendations = () => {
//   //const [flip, setFlip] = useState(false);
//   const [data, setData] = useState(null);
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };
//   const pagesPerItem = 6;
//   let dataMock = require('./mock-user.json');

//   // Fetch data
//   useEffect(() => {
//     async function fetchData() {
//       const user_id = localStorage.getItem('user_id')
//       const response = await fetch(
//         `https://us-central1-bitesight-858b3.cloudfunctions.net/app/api/recommendations/${user_id}`
//       );
//       const jsonData = await response.json();
//       // console.log(jsonData);
//       setData(jsonData);
//     }
//     fetchData();
//   }, []);

//   //const startRange = ((page - 1) * 3);
//   //const endRange = (Math.min(((page - 1) * 3) + 3 - 1, Object.keys(data).length - 1));

//   const renderElements = (startRange, endRange) => {
//     const elements = [];
//     for (let i = startRange; i <= endRange; i++) {
//       const restaurant_id = Object.values(data[i])[0]
//       elements.push(
//         <li className="cards_item">
//           <div className="card">
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <img
//                     src={Object.values(data[i])[12][0]}
//                     alt={Object.values(data[i])[12][0]}
//                     className="CardImg"
//                   />
//                 </div>
//                 <div className="flip-card-back">
//                   <h2>{Object.values(data[i])[6]}</h2>
//                   <h3>{Object.values(data[i])[2]}</h3>
//                   <h3>{Object.values(data[i])[7]}</h3>
//                   <StarRating restaurant_id={restaurant_id} user_id={localStorage.getItem('user_id')} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </li>
//       );
//     }

//     return elements;
//   };

//   /* Data Indexes:
//       0 - id
//       1 - website (Hay nulos)
//       2 - city
//       3 - imagesCount
//       4 - description (Hay nulos)
//       5 - reviewsCount
//       6 - title
//       7 - totalScore
//       8 - categoryName
//       9 - phone (Hay nulos)
//       10 - street
//       11 - price (Hay nulos)
//       12 - imageUrls (Es otro array con 3 fotos)
//       13 - location
//       14 - categories (Otro array)
//   */

//   return (
//     <div className="App-body">
//       <div>
//         {data ? (
//           <div>
//             <Stack alignItems="center">
//               <ul className="cards">
//                 {renderElements(
//                   (page - 1) * pagesPerItem,
//                   Math.min((page - 1) * pagesPerItem + pagesPerItem - 1, Object.keys(data).length - 1)
//                 )}
//               </ul>
//               <Pagination
//                 count={Math.ceil(Object.keys(data).length / pagesPerItem)}
//                 showFirstButton
//                 showLastButton
//                 page={page}
//                 onChange={handleChange}
//               />
//             </Stack>
//           </div>
//         ) : (
//           <p style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             fontSize: '2em',
//             color: '#444'
//           }}>
//             Getting your recommendations...
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

const Recommendations = () => {
  //const [flip, setFlip] = useState(false);
  const [data, setData] = useState(null);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pagesPerItem = 6;
  let dataMock = require("./mock-user.json");

  const renderElements = (startRange, endRange) => {
    const elements = [];
    for (let i = startRange; i <= endRange; i++) {
      const restaurant_id = Object.values(dataMock[i])[0];
      elements.push(
        <li className="cards_item">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={Object.values(dataMock[i])[12][0]}
                    alt={Object.values(dataMock[i])[12][0]}
                    className="CardImg"
                  />
                  <h3 style={{ color: "#ffc107" }}>
                    {Object.values(dataMock[i])[6]}
                  </h3>
                </div>
                <div className="flip-card-back" style={{ color: "#2a2a2a" }}>
                  <h3>{Object.values(dataMock[i])[6]}</h3>
                  <div className="grid-container-card-back">
                    <div className="grid-item-card-back row-span-all border-line">
                      {Object.values(dataMock[i])[8]}
                    </div>
                    <div className="grid-item-card-back row-span-all"/>
                    <div className="grid-item-card-back row-span-all"/>
                    <div className="grid-item-card-back picture-card-back">
                      <img
                        src={require("../assets/location-24.png")}
                        alt="LocationIcon"
                      />
                    </div>
                    <div className="grid-item-card-back">
                      {Object.values(dataMock[i])[2]}
                    </div>
                    <div className="grid-item-card-back">
                      {Object.values(dataMock[i])[10]}
                    </div>
                  </div>
                  <br />
                  <h4>General Rating: {Object.values(dataMock[i])[7]}</h4>
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
    <div className="App-body">
      <div>
        {dataMock ? (
          <div>
            <Stack alignItems="center">
              <ul className="cards">
                {renderElements(
                  (page - 1) * pagesPerItem,
                  Math.min(
                    (page - 1) * pagesPerItem + pagesPerItem - 1,
                    Object.keys(dataMock).length - 1
                  )
                )}
              </ul>
              <Pagination
                count={Math.ceil(Object.keys(dataMock).length / pagesPerItem)}
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
