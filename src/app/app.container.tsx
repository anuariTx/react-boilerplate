import React, { Fragment } from 'react';

import { IAppState } from '@rdx/root.reducer';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';
import { getActiveThemeState } from '@shared/themes/theme.selector';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';

import { FooterComponent } from '@layout/footer/footer.component';

export interface IAppContainerProps {
  theme: string;
};

const App = ({ theme }: IAppContainerProps) => {
  const activeTheme = configRootTheme(theme);

  return (
    <Router history={routerHistory}>
      <ThemeProvider theme={activeTheme}>
        <Fragment>
          <AppRoutes />
          <FooterComponent />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state: IAppState) => ({
  theme: getActiveThemeState(state),
});

export const AppContainer = connect(mapStateToProps)(App);
