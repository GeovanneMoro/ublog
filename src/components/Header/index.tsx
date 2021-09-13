import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/svg2.svg';
import MenuHamburguer from '../../assets/menu.svg';

import { Menu } from '../Menu';
import { MenuContext } from '../../contexts/MenuContext';
import { HeaderContainer } from './styles';

const Header: React.FC = (): JSX.Element => {
  const { toogleActive } = useContext(MenuContext);

  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={Logo} loading="lazy" />
        </Link>
        <button className="btn-mobile" onClick={toogleActive}>
          <img src={MenuHamburguer} alt="menu-hamburguer" />
        </button>
      </HeaderContainer>
      <Menu />
    </>
  );
};

export { Header };
