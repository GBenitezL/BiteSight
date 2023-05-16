import React from 'react';
import './404.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-header">404</h1>
      <h2 className="not-found-subheader">Page not found</h2>
      <p className="not-found-text">Sorry, the page you are looking for could not be found.</p>
    </div>
  );
};

export default NotFoundPage;