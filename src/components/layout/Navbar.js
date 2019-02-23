import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__links">
        <Link className="nav__links__link" to="/">
          About Me
        </Link>
        <Link className="nav__links__link " to="/skills">
          Skills
        </Link>
        <Link className="nav__links__link" to="projects">
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
