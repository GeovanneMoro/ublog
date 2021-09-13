import React from 'react';
import { MenuContextProvider } from '../../contexts/MenuContext';

import { Footer } from '../Footer';
import { Header } from '../Header';
import { ScrollToTop } from '../ScrollToTop';
import { Container, Content } from './styles';

interface IMasterLayout {
  children: React.ReactNode;
}

const MasterLayout: React.FC<IMasterLayout> = ({ children }): JSX.Element => {
  return (
    <Container>
      <MenuContextProvider>
        <Header />
      </MenuContextProvider>
      <Content>{children}</Content>
      <Footer />
      <ScrollToTop />
    </Container>
  );
};

export { MasterLayout };
