/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export default function Header() {
  // Nav Use states
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Responsiveness
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

  // Google API - Start
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          localStorage.setItem('userInfo', JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.clear();
  };
  // Google API - End

  var userLogged = JSON.parse(localStorage.getItem('userInfo'));

  const userPicClick = () => {
    const confirmed = window.confirm(
      "You are about to log out, do you want to proceed?"
    );

    if (confirmed) {
      logOut();
    }
  };

  useEffect(() => {
    if(userLogged != null){
      setProfile(userLogged);
      console.log(userLogged);
    }
 });
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
            <div
              className="UserPic tooltip"
              onClick={() => {
                userPicClick();
              }}
            >
              <span className="tooltiptext">{profile.name}</span>
              <Avatar alt="User Image" src={profile.picture} />
            </div>
          ) : (
            <button onClick={() => login()}>Login</button>
          )}
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Burger">
        🍔
      </button>
    </header>
  );
}
