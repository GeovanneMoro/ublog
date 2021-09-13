import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuContext } from '../../contexts/MenuContext';

import { Container, Content } from './styles';

const Menu: React.FC = (): JSX.Element => {
  const { active } = useContext(MenuContext);

  const menuActiveClass = active ? 'active' : '';

  // const [active, setActive] = useState(false);
  // const handleClickMenu = () => setActive(!active);

  return (
    <Container>
      <Content>
        {/* <button className="btn-mobile" onClick={toogleActive}>
          <img src={MenuHamburguer} alt="menu-hamburguer" />
        </button> */}
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
