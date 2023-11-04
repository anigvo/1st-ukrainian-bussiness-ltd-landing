import React from 'react';

import {
  HeaderWrap,
  LinkButton,
  NavWrapper,
  LogoWrap,
  Logo,
  LogoTitle,
} from './Header.styled.jsx';
import Image from '../../assets/images/logo.jpg';
export const Header = () => {
  return (
    <HeaderWrap>
      <LogoWrap to="/">
        <Logo alt="Logo" src={Image} />
        <LogoTitle>1stUB</LogoTitle>
      </LogoWrap>
      <NavWrapper>
        <LinkButton to="/">Головна</LinkButton>
        <LinkButton to="/team">Команда</LinkButton>
        <LinkButton to="/products">Продукти</LinkButton>
        <LinkButton to="/shares">Акції</LinkButton>
      </NavWrapper>
    </HeaderWrap>
  );
};
