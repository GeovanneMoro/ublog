import React from 'react';
import { Helmet } from 'react-helmet';

import { MasterLayout } from '../../components/MasterLayout';

const Error404 = () => {
  return (
    <MasterLayout>
      <Helmet>
        <title>UBLOG | Ops...</title>
      </Helmet>

      <h1>Erro 404 - Página não encontrada 😥</h1>
    </MasterLayout>
  );
};

export { Error404 };
