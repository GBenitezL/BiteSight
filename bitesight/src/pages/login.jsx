import React from "react";
import "./login.css";

const Login = () => {
  let width = window.innerWidth;
  if (width > 720) {
    return (
      <div className="row">
        <div className="column" style={{backgroundColor: "#696969"}}>
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div>
        <div className="column">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Small size</h1>
      </div>
    );
  }
};

export default Login;
