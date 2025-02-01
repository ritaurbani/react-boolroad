import React from 'react';
import { Link } from 'react-router-dom';


const AppHeader = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <img 
            src="/img/Logo.png" 
            alt="Logo BooRoad" 
            width="30" 
            height="24" 
            className="d-inline-block align-text-top ms-5"
          />
          BooRoad!
        </a>
        <Link to="/" className='nav-link text-white me-5'>Home</Link>
      </div>
    </nav>
  );
};

export default AppHeader;