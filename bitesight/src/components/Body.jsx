import React from "react";
import logo from "../assets/logo.png";
import "./Body.css";

const Body = () => {
    return (
        <div className="App-body">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
};

export default Body;