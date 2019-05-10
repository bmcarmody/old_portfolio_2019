import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';

import image from '../../img/avatar.svg';
import { Font__Bold, Universal__Padding } from '../mixins';

const HeaderContainer = styled.header`
  ${Font__Bold}
  ${Universal__Padding}
  height: 35rem;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' opacity='.5' viewBox='0 0 1100 540'%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:%23d55;}%3C/style%3E%3C/defs%3E%3Ctitle%3EAsset 2%3C/title%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='cls-1' points='0 0 1100 0 600 540 0 540 0 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-color: rgba(241, 92, 92, 0.8);
  color: #ffffff;
  font-size: 2rem;
  position: relative;

  @media screen and (max-width: 1300px) {
    background-image: none;
  }

  @media screen and (max-width: 940px) {
    font-size: 1.5rem;
  }
`;

const Topbar = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;
  position: relative;
`;

const Title = styled.div``;

const CenterContent = styled.div`
  height: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Avatar = styled.img`
  padding-left: 8rem;
  width: 15rem;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Goal = styled.p`
  text-align: right;
  width: 60rem;
  font-size: 2.5rem;
  line-height: 3.5rem;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Topbar>
        <Title>Brandon Carmody / Fullstack Developer</Title>
        <Navbar />
      </Topbar>
      <CenterContent>
        <Avatar src={image} alt="Avatar" />
        <Goal>
          A skilled &amp; passionate web developer looking to enter into the
          field of fullstack web development
        </Goal>
      </CenterContent>
    </HeaderContainer>
  );
};

export default Header;
