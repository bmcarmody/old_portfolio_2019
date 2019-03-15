import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>About Brandon Carmody</h1>
      <p>
        I'm a student at Champlain College that will be graduating this year on
        May 3rd with my Bachelors degree in Web Design and Development. I'm an
        aspiring fullstack developer who is passionate about web technologies,
        both front and backend. I can build complex, intrecate applications
        using the best avaliable languages and tools for the job. I'm fluent and
        enjoy working with React, Node, and any SQL/NoSQL database but I'm
        always open to learning new and different technologies. I'm currently
        seeking a full-time position as a fullstack web developer that will deal
        with tasks from all parts of the programming spectrum. No task is too
        much for me, I love learning all the intrecacies about web development!
        Please, check out my LinkedIn, Github, and all of the projects I've been
        working hard on.
      </p>
    </AboutContainer>
  );
};

export default About;
