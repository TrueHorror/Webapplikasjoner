import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Polls from '../pages/polls';
import FrontPage from '../pages/frontPage';
import SignIn from '../pages/signIn';
import SignUp from '../pages/signup';
import CreatePoll from '../pages/createpoll';
import TakePoll from '../pages/takePoll';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <FrontPage />
        </Route>
        <Route exact path="/polls" render={(props) => <Polls {...props} />} />
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup" render={(props) => <SignUp {...props} />} />

        <Route
          exact
          path="/createpoll"
          render={(props) => <CreatePoll {...props} />}
        />

        <Route exact path="/poll/:id">
          <TakePoll />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
