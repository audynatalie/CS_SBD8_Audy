import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={`top-header ${theme}`}>
      <div className="container">
        <nav className="top-nav">
          <div className="top-nav-left">
            <span className="country-selector">Indonesia</span>
          </div>
          <div className="top-nav-right">
            <Link to="/karir" className="top-nav-link">Karir</Link>
            <Link to="/news" className="top-nav-link">News</Link>
            <Link to="/investors" className="top-nav-link">Investors</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;