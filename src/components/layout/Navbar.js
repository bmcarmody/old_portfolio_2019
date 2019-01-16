import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/"> About Me </Link>
      <Link to="/skills">Skills</Link>
      <Link to="projects">Projects</Link>
    </div>
  );
};

export default Navbar;
