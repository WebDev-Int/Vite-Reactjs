// import React from 'react';
import webdevSvg from '../../assets/webdev.svg'; // Adjust the path based on your project structure
import '../css/Header.css'

const Header = () => {
  return (
    <header>
      <img src={webdevSvg} alt="WebDev Logo" className="webdev-svg" />
      {/* Other header content */}
    </header>
  );
};

export default Header;
