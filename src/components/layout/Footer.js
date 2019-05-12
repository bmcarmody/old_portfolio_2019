import React from 'react';
import styled from 'styled-components';
import { Universal__Padding, Section__Padding } from '../mixins';

const FooterContainer = styled.footer`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: rgba(241, 92, 92, 0.8);
  height: 7.5rem;
  color: #ffffff;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FlexItem = styled.div`
  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 1.75rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-decoration: underline;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer>
        <FlexItem>
          <a href="#projects">Project</a>
          <br />
          <br />
          <a href="#skills">Skills</a>
        </FlexItem>
        <FlexItem>
          <a href="#contact">Contact</a>
          <br />
          <br />
          <a
            href="https://www.linkedin.com/in/bmcarmody/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </FlexItem>
        <FlexItem>
          <a
            href="https://github.com/bmcarmody"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </FlexItem>
      </FlexContainer>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()} Brandon Carmody
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
