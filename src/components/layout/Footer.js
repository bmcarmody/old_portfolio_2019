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
          <a class="footer__spacing" href="#projects">
            Project
          </a>
          <br />
          <br />
          <a href="#skills">Skills</a>
        </FlexItem>
        <FlexItem>
          <a class="footer__spacing" href="#contact">
            Contact
          </a>
          <br />
          <br />
          <a href="https://www.linkedin.com/in/bmcarmody/">LinkedIn</a>
        </FlexItem>
        <FlexItem>
          <a href="https://github.com/bmcarmody">Github</a>
        </FlexItem>
      </FlexContainer>
      <Copyright>
        Copyright &copy; {new Date().getFullYear()} Brandon Carmody
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
