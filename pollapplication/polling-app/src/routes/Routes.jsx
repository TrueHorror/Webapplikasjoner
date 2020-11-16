import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/polls';
import FrontPage from '../pages/frontPage';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';
import CreatePoll from '../pages/createpoll';

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
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/createpoll">
          <CreatePoll />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
