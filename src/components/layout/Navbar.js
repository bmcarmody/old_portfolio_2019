import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  a {
    text-decoration: none;
    color: #ffffff;
    padding-left: 5rem;
  }
`;

const NavExtended = styled.div`
  font-size: 3rem !important;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 769px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  .navbar {
    &__menu {
      & > &--toggle:checked ~ label > &__icon {
        background: white;
        height: 0;
        &:before {
          top: 0;
          transform: rotate(135deg);
          transition: all 0.2s ease;
        }

        &:after {
          top: 0;
          transform: rotate(-135deg);
          transition: all 0.2s ease;
        }
      }
      &--toggle {
        position: absolute;
        visibility: hidden;

        &:checked ~ .navbar__menu__container {
          visibility: visible;
          transform: scale(1);
          transition: all 0.2s ease;
        }
      }

      label {
        position: relative;
      }

      &__icon {
        z-index: 10;
        position: relative;
        width: 2.25rem;
        height: 2px;
        background: white;

        &::before,
        &::after {
          content: '';
          position: absolute;
          z-index: 1;
          top: -7px;
          width: 100%;
          height: 2px;
          background: inherit;
          transition: all 0.2s ease;
        }

        &::after {
          top: 7px;
        }

        &--wrapper {
          cursor: pointer;
          z-index: 15;
          top: -1rem;
          position: absolute;
          width: 2.25rem;
          height: 2rem;
        }
      }

      &__container {
        visibility: hidden;
        position: absolute;
        z-index: 5;
        top: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(241, 92, 92, 0.8);
        transform: scale(0);
        transition: all 0.2s ease;
        display: grid;
        justify-items: center;
        align-items: start;
        grid-row-gap: 0.5rem;
        padding-top: 10rem;
        transform-origin: top;

        .navbar__link {
          color: white;
          font-size: 6rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavExtended>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </NavExtended>
      <NavMenu>
        <input
          type="checkbox"
          id="navbar__menu--toggle"
          className="navbar__menu--toggle"
        />
        <label htmlFor="navbar__menu--toggle">
          <div className="navbar__menu__icon--wrapper" />
          <div className="navbar__menu__icon" />
        </label>

        <div className="navbar__menu__container">
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#skills" className="navbar__link">
            Skills
          </a>
          <a href="#projects" className="navbar__link">
            Projects
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
        </div>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
