import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import eateryImage from '../../img/eatery.png';

import { Universal__Padding, Section__Padding } from '../mixins';

const ProjectContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}

  .slider {
    .slide__container {
      display: grid !important;
      grid-template-columns: 2fr 2fr;
      grid-template-areas: 'info img';
      grid-template-rows: auto;

      .information__container {
        grid-area: info;
        padding-right: 1rem;

        h2 {
          font-size: 3.5rem;
          color: rgba(241, 92, 92, 1);
          text-align: center;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid black;
        }

        h3 {
          padding-top: 1.5rem;
          padding-bottom: 0.5rem;
          font-size: 2rem;
        }

        ul {
          margin-left: 2rem;
          font-size: 1.5rem;
        }

        .test2 {
          float: right;
        }
      }
      .img__container {
        grid-area: img;
        border: 1px solid black;
        overflow: hidden;
        height: fit-content;
        align-self: center;
        max-height: 50rem;
        img {
          background-repeat: no-repeat;
          background-size: cover;
          width: 100%;
        }
      }

      .buttons {
        margin-top: 1rem;
        .button--left {
          float: left;
        }

        .button--right {
          float: right;
        }
      }

      .clear-fix {
        clear: both;
        margin-bottom: 1rem;
      }

      a {
        text-decoration: none;
        color: white;
      }
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: red;
  }

  .slick-prev {
    left: 1% !important;
    z-index: 1;
  }
  .slick-next {
    right: 1% !important;
    z-index: 1;
  }
`;

class Projects extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slider'
    };

    return (
      <ProjectContainer>
        <h1>Projects</h1>
        <Slider {...settings}>
          <div className="slide__container">
            <div className="information__container">
              <h2>Eatery</h2>
              <p>
                A fullstack recipe search engine created with React and NodeJS,
                powered by the Food2Fork API.
              </p>
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>SCSS</li>
              </ul>

              <h3>Backend</h3>
              <ul>
                <li>Node</li>
                <li>MongoDB</li>
              </ul>

              <h3>Functionality</h3>
              <p>
                From the home page, users can search for any recipe they desire.
                Once searched, a request will be made to the Food2Fork API and
                will populate a list of found recipes. Users can then click on a
                recipe of their choosing to get more information on said recipe.
                Users are also able to create an account to save their favorite
                recipes but it's not required. User's passwords are encrypted
                with a hashing library called bcrypt before being stored in the
                database. Private routes are protected with passport which
                require a valid JSON web token, generated when the user logs in
                (1 hour time limit before it expires and user gets logged out).
              </p>
              <div className="buttons">
                <button className="button--left btn">
                  <a
                    href="https://still-wave-69298.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </button>
                <button className="button--right btn">
                  <a
                    href="https://github.com/bmcarmody/eatery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
              <div className="clear-fix" />
            </div>
            <div className="img__container">
              <img src={eateryImage} alt="Eatery" />
            </div>
          </div>
          <div>Test</div>
        </Slider>
      </ProjectContainer>
    );
  }
}

export default Projects;
