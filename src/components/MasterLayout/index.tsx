import React from 'react';

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
      <Header />
      <Content>{children}</Content>
      <Footer />
      <ScrollToTop />
    </Container>
  );
};

export { MasterLayout };
