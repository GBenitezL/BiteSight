import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <main>
        <h1>Welcome to BiteSight</h1>
        <h2>Who Are We?</h2>
        <p>We are a group of students from the <strong>Tec de Monterrey</strong>. This web application will be our last big proyect, how exciting!.</p>
        <h2>What Is This Proyect About?</h2>
        <p>BiteSight is a web application that can help people in Monterrey discover new places to eat or visit. With such a big city, it is almost certain that there are good places we do not know. We want to create a recommendation application that uses Machine Learning in order to target the places that are most likely to match a person based on their likings.</p>
      </main>
    </div>
  );
}

export default Home;
