import React from 'react';
import styled from 'styled-components';

import { Universal__Padding, Section__Padding } from '../mixins';

const ContactContainer = styled.section`
  ${Universal__Padding}
  ${Section__Padding}
  background-color: rgba(245,245,245, .5);
`;

const FormContainer = styled.form`
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

  button {
    padding: 1rem;

    @media screen and (max-width: 1024px) {
      width: 100%;
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <FormContainer>
        <input type="text" placeholder="Name" />
        <br />

        <input type="text" placeholder="Email" />
        <br />

        <textarea type="text" placeholder="Message" />
        <br />

        <button type="submit" className="btn">
          Submit
        </button>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
