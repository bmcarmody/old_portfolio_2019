import React, { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  a {
    text-decoration: none;
    color: #ffffff;
    padding-left: 5rem;
  }

  .navbar {
    &__menu {
      &--toggle:checked ~ .navbar__links {
        display: block;
        z-index: 5;
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 106, 106, 0.9);
        display: grid;
        justify-items: center;
        align-items: start;
        padding-top: 6rem;
        font-size: 3rem;
      }

      &--toggle:checked ~ label > .navbar__menu__icon {
        height: 0px;

        &::before {
          transform: rotate(45deg);
          top: 0rem;
        }

        &::after {
          transform: rotate(-45deg);
          top: 0rem;
        }
      }

      &--toggle {
        display: none;
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
          bottom: -1rem;
          position: absolute;
          width: 2.25rem;
          height: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    .navbar {
      &__links {
        display: none;
      }

      &__menu__icon,
      &__menu__icon--wrapper {
        display: block;
      }
    }
  }

  @media screen and (min-width: 831px) {
    .navbar {
      &__links {
        display: block;
      }

      &__menu__icon,
      &__menu__icon--wrapper {
        display: none;
      }
    }
  }
`;

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const noScrolling = () => {
    if (clicked === false) {
      document.body.style.overflow = 'hidden';
      setClicked(true);
    } else {
      document.body.style.overflow = 'auto';
      setClicked(false);
    }
  };

  const closeNav = () => {
    if (clicked === true) {
      noScrolling();
      const checkbox = document.querySelector('.navbar__menu--toggle');
      checkbox.checked = false;
    }
  };

  return (
    <Nav>
      <input
        type="checkbox"
        id="navbar__menu--toggle"
        className="navbar__menu--toggle"
        onClick={noScrolling}
      />
      <label htmlFor="navbar__menu--toggle">
        <div className="navbar__menu__icon--wrapper" />
        <div className="navbar__menu__icon" />
      </label>

      <div className="navbar__links">
        <a href="#about" onClick={closeNav}>
          About
        </a>
        <a href="#skills" onClick={closeNav}>
          Skills
        </a>
        <a href="#projects" onClick={closeNav}>
          Projects
        </a>
        <a href="#contact" onClick={closeNav}>
          Contact
        </a>
      </div>
    </Nav>
  );
};

export default Navbar;
