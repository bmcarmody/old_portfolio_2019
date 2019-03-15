import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #ffffff;
    padding-left: 5rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </Nav>
  );
};

export default Navbar;
