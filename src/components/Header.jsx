/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import Avatar from "@mui/material/Avatar";

export default function Header() {
  const [profile, setProfile] = useState([]);
  const clientId =
    "1015129329327-03gfdi2lgo9l4i4m0krvkqrb2c91uhan.apps.googleusercontent.com";
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    setProfile(res.profileObj);
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
  };

  const userPicClick = () => {
    alert("Hello, World!");
  };

  return (
    <header className="Header">
      <a href="/">
        <img src={require("../assets/logo.png")} className="Logo" alt="logo" />
      </a>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/" className="a2">
            Home
          </a>
          <a href="/recommendations" className="a2">
            Recommendations
          </a>
          <a href="/about" className="a2">
            About
          </a>
          {profile ? (
            <div className="UserPic tooltip" onClick={userPicClick}>
              <span className="tooltiptext">{profile.name}</span>
              <Avatar alt="User Image" src={profile.imageUrl}/>
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Login
                </button>
              )}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
