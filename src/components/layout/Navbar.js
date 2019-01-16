import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/"> About Me </Link>
      <Link to="/skills">Skills</Link>
      <Link to="projects">Projects</Link>
    </nav>
  );
};

export default Navbar;
