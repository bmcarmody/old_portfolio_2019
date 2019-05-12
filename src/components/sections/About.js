import React from 'react';
import styled from 'styled-components';

import { Universal__Padding, Section__Padding } from '../mixins';

const AboutContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <h1>About Me</h1>
      <p>
        A recent graduate of Champlain College that holds a Bachelors degree in
        Web Design and Development. I'm an aspiring fullstack developer who is
        passionate about web technologies, both front and backend. I can build
        complex, intricate applications using the best available languages and
        tools for the job. I'm fluent and enjoy working with React, Node, and
        any SQL/NoSQL database but I'm always open to learning new and different
        technologies. I'm currently seeking a full-time position as a fullstack
        web developer that will deal with tasks from all parts of the
        programming spectrum. No task is too much for me, I love learning all
        the intricacies about web development! Please, check out my LinkedIn,
        Github, and all of the projects I've been working hard on.
      </p>
    </AboutContainer>
  );
};

export default About;
