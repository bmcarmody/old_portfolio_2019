import React from 'react';
import styled from 'styled-components';

import { Universal__Padding, Section__Padding } from '../mixins';

const ContactContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: rgba(245,245,245, .5);

  form {
    input {
      width: 50%;
      height: 3rem;
      padding-left: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #808080;
      font-size: 1.5rem;
      margin-bottom: 2.5rem;

      &:focus {
        outline: none;
        border: 1px solid rgba(241, 92, 92, 0.8);
      }

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    textarea {
      width: 50%;
      height: 12.5rem;
      padding-top: 1rem;
      padding-left: 1rem;
      border-radius: 0.5rem;
      border: 1px solid #808080;
      font-size: 1.5rem;
      margin-bottom: 2.5rem;

      &:focus {
        outline: none;
        border: 1px solid rgba(241, 92, 92, 0.8);
      }

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }

    .submit {
      border: none;
      height: 3.5rem;
      padding: 0 1rem;
      width: fit-content;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;
const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message" />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </ContactContainer>
  );
};

export default Contact;
