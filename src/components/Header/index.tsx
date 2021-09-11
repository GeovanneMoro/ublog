import React from 'react';
import { HeaderContainer } from './styles';

import Logo from '../../assets/svg2.svg';
import { Link } from 'react-router-dom';
import { Menu } from '../Menu';

const Header: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} loading="lazy" />
        </Link>
      </HeaderContainer>
      <Menu />
    </>
  );
};

export { Header };
