import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { NavigationMenuContainer } from '@layout/navigation-menu/navigation-menu.container';

export const AppRoutes = () => (
  <Switch>
    <NavigationMenuContainer />
    <Route strict path="/" />
  </Switch>
);
