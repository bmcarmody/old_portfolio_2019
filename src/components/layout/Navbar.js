import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <a className="nav__links__link font_semibold" href=".about">
          About Me
        </a>
        <a className="nav__links__link font_semibold" href=".skills">
          Skills
        </a>
        <a className="nav__links__link font_semibold" href=".projects">
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
