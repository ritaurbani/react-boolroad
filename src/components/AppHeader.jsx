import React from 'react';
import { Link } from 'react-router-dom';


const AppHeader = () => {
  return (
    <nav className="navbar grey">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img 
            src="/img/BigLogo.png" 
            alt="Logo BooRoad" 
            width="120" 
            height="40" 
            className="d-inline-block align-text-top ms-5"
          />
        </a>
        <Link to="/" className='nav-link text-white me-5'><i className="fa-solid fa-house bg-blu"></i></Link>
      </div>
    </nav>
  );
};

export default AppHeader;