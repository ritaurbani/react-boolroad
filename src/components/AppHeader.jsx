import React from 'react';

const AppHeader = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img 
            src="/img/Logo.png" 
            alt="Logo BooRoad" 
            width="30" 
            height="24" 
            className="d-inline-block align-text-top"
          />
          BooRoad!
        </a>
      </div>
    </nav>
  );
};

export default AppHeader;