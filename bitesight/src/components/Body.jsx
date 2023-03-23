import React, { useState } from 'react';
import "./Body.css";
import "./Flip.css";

const Body = () => {
    const [flip, setFlip] = useState(false);
  return (
    <div className="App-body">
      <ul class="cards">
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
            </div>
        </div>
        </div>
      </div>
    </li>
    <li class="cards_item">
      <div class="card">
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <img src={require("../assets/img_avatar.png")} alt="Avatar" style={{width:300, height:300}}/>
            </div>
            <div className="flip-card-back">
            <h1>John Doe</h1>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
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
