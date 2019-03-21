import React from 'react';
import styled from 'styled-components';
import { Universal__Padding, Section__Padding } from '../mixins';

const FooterContainer = styled.footer`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: #f15c5c;
  position: absolute;
  width: calc(100% - 24rem);
  bottom: 0;
  height: 12rem;
  color: #ffffff;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const FlexItem = styled.div`
  text-align: center;

  h3 {
    font-size: 2rem;
    padding-bottom: 1rem;
  }

  a {
    font-size: 1.5rem;
    color: white;
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FlexContainer>
        <FlexItem>
          <h3>Sections</h3>
          <div>
            <a class="footer__about" href="#about">
              About
            </a>
            <br />
            <a class="footer__skills" href="#skills">
              Skills
            </a>
            <br />
            <a class="footer__projects" href="#projects">
              Project
            </a>
            <br />
            <a class="footer__contact" href="#contact">
              Contact
            </a>
            <br />
          </div>
        </FlexItem>
        <FlexItem>
          <h3>Social Media</h3>
          <ul>
            <a href="https://www.linkedin.com/in/bmcarmody/">LinkedIn</a>
            <br />
            <a href="https://github.com/bmcarmody">Github</a>
            <br />
          </ul>
        </FlexItem>
      </FlexContainer>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()} Brandon Carmody
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
