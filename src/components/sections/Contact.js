import React, { useState } from 'react';
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
      padding: 1rem;

      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  let formData = {
    'form-name': 'contactForm',
    name,
    email,
    message
  };

  const onSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(formData)
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <form onSubmit={onSubmit} name="contactForm">
        <input type="hidden" name="form-name" value="contactForm" />
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          onChange={e => setMessage(e.target.value)}
        />{' '}
        <br />
        <button type="submit" className="btn submit">
          Submit
        </button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
