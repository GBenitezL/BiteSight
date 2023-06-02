import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container" style={{"margin-bottom": "4rem"}}>
      <main>
        <h1>Welcome to BiteSight</h1>
        <h2>Who Are We?</h2>
        <p>We are a group of students from Tec de Monterrey. This web application will be our last big project. How exciting!</p>
        <h2>What Is This Project About?</h2>
        <p>BiteSight is a web application that can help people in Monterrey discover new places to eat or visit. With such a big city, it is almost certain that there are good places we do not know about. We want to create a recommendation application that uses Machine Learning to target the places that are most likely to match a person's preferences.</p>
      </main>
    </div>
  );
}
