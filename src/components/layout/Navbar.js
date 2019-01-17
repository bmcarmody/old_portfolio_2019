import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        About Me
      </Link>
      <Link className="nav__link" to="/skills">
        Skills
      </Link>
      <Link className="nav__link" to="projects">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
