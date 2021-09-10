import React from 'react';
import { Titulo } from './styles';

interface ITitle {
  children: React.ReactNode;
}

const Title: React.FC<ITitle> = ({ children }): JSX.Element => {
  return <Titulo>{children}</Titulo>;
};

export { Title };
