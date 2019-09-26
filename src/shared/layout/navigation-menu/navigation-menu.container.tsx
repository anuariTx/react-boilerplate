import React from 'react';

import { IMatch } from '@interfaces/match.interface';

import { NavigationMenuComponent } from '@layout/navigation-menu/navigation-menu.component';

interface INavigationMenuContainerProps {
  match?: IMatch;
};

export const NavigationMenuContainer = ({ match }: INavigationMenuContainerProps) => {
  return <NavigationMenuComponent match={match} />;
};
