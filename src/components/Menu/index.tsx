import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuHamburguer from '../../assets/menu.svg';
import { Container, Content } from './styles';

const Menu: React.FC = (): JSX.Element => {
  const [active, setActive] = useState(false);
  const menuActiveClass = active ? 'active' : '';

  const handleClickMenu = () => setActive(!active);

  return (
    <Container>
      <Content>
        <button className="btn-mobile" onClick={handleClickMenu}>
          <img src={MenuHamburguer} alt="menu-hamburguer" />
        </button>
        <ul className={`menu-principal ${menuActiveClass}`}>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sobre-a-ublog" activeClassName="active">
              Sobre a UBLOG
            </NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="active">
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/contato" activeClassName="active">
              Fale conosco
            </NavLink>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export { Menu };
