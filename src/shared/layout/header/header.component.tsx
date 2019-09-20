import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router';

import injectSheet from 'react-jss';

interface IHeaderComponentProps extends RouteComponentProps {
  classes: any;
}

const headerStyles = (theme: any) => ({
  header: {
    background: theme.mainBackground,
    color: theme.mainText,
  },
});

export const Header = (props: IHeaderComponentProps) => {
  return (
    <header>

    </header>
  )
};

const StyledHeader = injectSheet(headerStyles)(Header);

export const HeaderComponent = withRouter(StyledHeader);
