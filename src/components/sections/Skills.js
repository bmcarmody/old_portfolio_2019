import React from 'react';
import styled from 'styled-components';

import { Universal__Padding, Section__Padding } from '../mixins';

const SkillsContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: rgba(245,245,245, .5);

  span {
    font-weight: bold;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-template-areas: 'left right';
`;

const LeftColumn = styled.div`
  grid-area: left;

  p {
    padding-bottom: 2.5rem

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const RightColumn = styled.div`
  grid-area: right;

  p {
    padding-bottom: 2.5rem

    &:last-child {
      padding-bottom: 0;
    }
  }
`;

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <h1>Skills</h1>
      <GridContainer>
        <LeftColumn>
          <p>
            <span>Frontend -</span> React, JavaScript, HTML, CSS{' '}
            <strong>/</strong> SCSS <strong>/</strong> Styled-Components
          </p>
          <p>
            <span>Backend -</span> NodeJS, Express
          </p>
          <p>
            <span>Tools -</span> NPM/Yarn, Git/Github, Webpack, Postman
          </p>
        </LeftColumn>
        <RightColumn>
          <p>
            <span>Testing -</span> Mocha, Jest, Enzyme
          </p>
          <p>
            <span>Databases -</span> MongoDB w/ Mongoose
          </p>
          <p>
            <span>Todo -</span> GraphQL, Docker, Angular
          </p>
        </RightColumn>
      </GridContainer>
    </SkillsContainer>
  );
};

export default Skills;
