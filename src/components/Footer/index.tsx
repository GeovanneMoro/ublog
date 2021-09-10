import React from 'react';

import Logo from '../../assets/svg2.svg';
import { RedesSociais } from '../RedesSociais';
import { FooterContainer, Content } from './styles';

const Footer: React.FC = (): JSX.Element => {
  return (
    <FooterContainer>
      <Content>
        <div className="flex">
          <img src={Logo} alt="UBLOG" />
          <RedesSociais />
        </div>
        <div className="flex">
          <address>
            111 N Sepulveda Blvd, Manhattan Beach <br />
            CA, USA
          </address>
          <p>
            Copyright &copy; UBLOG
            <br />
            Todos os direitos reservados.
          </p>
        </div>
      </Content>
    </FooterContainer>
  );
};

export { Footer };
