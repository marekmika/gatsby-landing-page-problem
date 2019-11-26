import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Menu from '../images/outline-menu-24px.svg';
import Close from '../images/close.svg';
import { colors } from '../styles/variables';
import { fontStyles } from '../styles/variables';
import { injectIntl, IntlFormatters } from 'gatsby-plugin-intl';

const slideAnimation = keyframes`
  from {
    transfrom: translateX(-500px);
  }
  to {
    transfrom: translateX(-500px);
  }
`;
const Wrapper = styled.header<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding-top: 10px;
  background-color: ${colors.black};

  padding-bottom: 8px;
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c) left bottom
    ${colors.black} no-repeat;
  background-size: 100% 8px;

  z-index: 60;

  @media (max-width: 1051px) {
    box-shadow: ${props =>
      props.isOpen ? '0px 3px 32px rgba(0, 0, 0, 0.16)' : 'unset'};

    align-items: baseline;
  }

  /* Logo */
  & > .logo-wrapper {
    top: 24px;
    left: 32px;
    width: 179px;
    height: 32px;
    padding-left: 20px;
  }

  /* Logo Menu */
  & .burger-menu {
    cursor: pointer;
    padding-right: 20px;
    transition: opacity 0.5s ease-out;
  }
  & .burger-menu:active {
    opacity: 0.4;
  }
  & .menu-exit {
    display: flex;
    height: 28px;
    width: 28px;
    cursor: pointer;
    transition: opacity 0.5s ease-out;
  }
  & .menu-exit:active {
    opacity: 0.4;
  }

  /* Menu */
  & .menu {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: black;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100vh;
    width: 370px;
    max-width: 370px;
    transform: translateX(${props => (props.isOpen ? '0px' : '382px')});
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    @media (max-width: 575px) {
      width: 100%;
    }
  }
  & .menu-animate {
    animation-name: ${slideAnimation};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }
  & .menu-top-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: black;
    border-width: 0px 0px 8px 0px;
    border-style: solid;
    border-image: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c) 1 / 1 / 0
      stretch;
  }
  & .menu-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
    background: tranpsarent;
    height: 80px;
    padding-bottom: 20px;
    width: 100%;
  }
  & .menu-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin-top: 40px;
    margin-left: 5%;
    & li {
      margin-top: 60px;
    }
    & li:first-child {
      margin-top: 0px;
    }
    & li:last-child {
      margin-bottom: 60px;
    }
    @media (max-width: 575px) {
      width: 70%;
      margin-top: 15px;
      margin-left: 25%;
    }
  }
  & .item {
    ${fontStyles.menuitem};
    text-transform: uppercase;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    transition: color 0.3s ease-out;
  }
  & .item:hover {
    color: white;
    transition: color 0.3s ease-out;
  }
  & .item.active {
    ${fontStyles.footerHeading},
    position: relative;
    font-weight: bold;
    color: white;
  }
  & .item.active::before {
    position: absolute;
    margin-left: -40px;
    content: '';
    height: 1.2em;
    width: 5px;
    background: white;
  }
  & .nav-wrapper {
    display: flex;
    flex-direction: column;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    background-color: ${colors.black};
  }
  & .languages {
    margin-right: 30px;
    margin-bottom: 20px;
    margin-left: auto;
    width: 80px;
    display: flex;
    justify-content: space-around;
  }
  & .instance {
    margin-top: 30px;
    display: flex;
    width: 70%;
    margin-left: 15%;
    @media (max-width: 575px) {
      margin-top: 5px;
      width: 60%;
      margin-left: auto;
      margin-right: auto;
    }
  }
  & .instance:first-child {
    margin-top: 0px;
  }
  & .instances {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`;

const Header = ({ intl }: IntlFormatters) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div className="burger-menu" onClick={() => setIsOpen(true)}>
          <Menu />
        </div>
        <div className={`menu ${isOpen ? 'menu-animate' : ''}`}>
          <div className="menu-header">
            <div onClick={() => setIsOpen(false)} className="menu-exit">
              <Close />
            </div>
          </div>
          <div className="menu-top-box">
            <ul className="menu-list">
              <li className="item active">
                {intl.formatMessage({ id: 'header.about' })}
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default injectIntl(Header);
