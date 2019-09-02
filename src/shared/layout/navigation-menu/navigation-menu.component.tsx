import React from 'react';

import { IMatch } from '@interfaces/match.interface';

import { Link } from 'react-router-dom';

interface INavigationMenuComponentProps {
  match: IMatch;
};

export const NavigationMenuComponent = ({ match }: INavigationMenuComponentProps) => {
  return (
    <div>Nav Menu</div>
  );
};
