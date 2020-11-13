import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/polls';
import FrontPage from '../pages/frontPage';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route path="/polls">
          <Polls />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
