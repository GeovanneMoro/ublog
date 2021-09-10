import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { SobrePage } from '../pages/SobrePage';
import { PostsPage } from '../pages/PostsPage';
import { PostPage } from '../pages/PostPage';
import { Error404 } from '../pages/Error404';
import { ContatoPage } from '../pages/ContatoPage';

const Routes: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/sobre-a-ublog" component={SobrePage} />
      <Route path="/posts" component={PostsPage} exact />
      <Route path="/posts/:title" component={PostPage} />
      <Route path="/contato" component={ContatoPage} />
      <Route path="*" component={Error404} />
    </Switch>
  );
};

export { Routes };
