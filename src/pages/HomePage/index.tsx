import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';

import { MasterLayout } from '../../components/MasterLayout';

import ImageManPC from '../../assets/man-pc2.jpg';

import { Container } from './styles';

const HomePage: React.FC = (): JSX.Element => {
  const history = useHistory();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    history.push('/posts');
  };

  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Bem-vindo ao nosso site</title>
      </Helmet>
      <Container>
        <img src={ImageManPC} alt="" />
        <div>
          <h1>&gt; Olá, mundo!</h1>
          <p>
            Seja bem-vindo ao <span>UBLOG</span> <br /> seu portal de
            informação.
          </p>
          <button onClick={handleClick}>Ver Posts</button>
        </div>
      </Container>
    </MasterLayout>
  );
};

export { HomePage };
