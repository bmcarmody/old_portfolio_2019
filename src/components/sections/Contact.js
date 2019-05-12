import React from 'react';
import styled from 'styled-components';

import { Universal__Padding, Section__Padding } from '../mixins';

const ContactContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: rgba(245,245,245, .5);

  a {
    color: black;
    font-weight: bold;
  }
`;
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <p>
        If you would like to get into contact with me, please reach out via my{' '}
        <a
          href="https://www.linkedin.com/in/bmcarmody/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        page and I will get back to you as soon as I can. <br /> <br />
        Thank you.
      </p>
    </ContactContainer>
  );
};

export default Contact;
