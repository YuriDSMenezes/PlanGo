import React, { FC } from 'react';
import { RouteProps, Switch } from 'react-router-dom';
import Route from './Route';
import Navbar from '../components/NavBar';
import Dashboard from '../pages/Dashboard';
import DreamsPage from '../pages/DreamsPage';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: FC = () => (
  <div style={{ display: 'flex' }}>
    {window.location.pathname === '/' ? <></> : <Navbar />}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/sonhos" component={DreamsPage} />
      <Route path="/signUp" component={SignUp} />
    </Switch>
  </div>
);

export default Routes;
