import { FC } from 'react';

import { HashRouter, useRoutes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Mine from '../pages/Mine';

const GetRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/mine',
      element: <Mine></Mine>,
    },
    { path: '*', element: <Home /> },
  ]);
  return routes;
};

const Router: FC = () => {
  return (
    <HashRouter>
      <GetRoutes></GetRoutes>
    </HashRouter>
  );
};

export default Router;
