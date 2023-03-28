import React from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

const Login = () => {
  let width = window.innerWidth;
  if (width > 720) {
    return (
      <div className="container">
        <h1>Big size</h1>
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
