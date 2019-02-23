import React from 'react';
import bImage from '../../img/bcarmody-headshot.png';

const Header = () => {
  return (
    <header className="header">
      <img className="header__picture" src={bImage} alt="Brandon Carmody" />
      <h3 className="header__name">Brandon Carmody</h3>
      <h4 className="header__title">Fullstack Developer</h4>
    </header>
  );
};

export default Header;
