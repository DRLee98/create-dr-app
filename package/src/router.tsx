import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Home from './pages/Home';

interface IRoute {
  path: string;
  component: ReactElement;
}

function Router() {
  const routes: IRoute[] = [
    { path: '/', component: <Home /> },
    { path: '/profile', component: <Profile /> }
  ];
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route key={`route_${route.path}`} path={route.path} exact>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
