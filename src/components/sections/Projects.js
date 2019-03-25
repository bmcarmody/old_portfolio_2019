import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Universal__Padding, Section__Padding } from '../mixins';

const ProjectContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}

  .slider {
    img {
      float: right;
    }
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000000;
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
          <div>
            <h3>1</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
          <div>
            <h3>2</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
          <div>
            <h3>3</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
          <div>
            <h3>4</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
          <div>
            <h3>5</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
          <div>
            <h3>6</h3>
            <img src="https://placeimg.com/640/480/any" />
          </div>
        </Slider>
      </ProjectContainer>
    );
  }
}

export default Projects;
