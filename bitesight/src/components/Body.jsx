import React, { useState } from "react";
import "./Body.css";
import "./Flip.css";
//import Rating from '@mui/material/Rating';

const Body = () => {
  const [flip, setFlip] = useState(false);
  return (
    <div className="App-body">
      <ul className="cards">
        <li className="cards_item">
          <div className="card">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={
                      "https://lh3.googleusercontent.com/p/AF1QipPQmurNV8R8o6lNgdemH0LOwyKXp9w8JfRR_F0=s1360-w1360-h1020"
                    }
                    alt="Avatar"
                    className="CardImg"
                  />
                </div>
                <div className="flip-card-back">
                  <h1>Restaurant Los Cabritos Alameda</h1>
                  <h2>Rating: 4.8</h2>
                  <h2>Mexicana</h2>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Body;
