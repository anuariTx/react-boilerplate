import React, { Fragment } from 'react';

import { IAppState } from '@rdx/root.reducer';

import { Router } from 'react-router-dom';
import { routerHistory } from '@routes/router.history';
import { AppRoutes } from '@routes/app.routes';

import { connect } from 'react-redux';
import { getActiveThemeState } from '@shared/themes/theme.selector';

import { ThemeProvider } from 'react-jss';
import { configRootTheme } from '@themes/root.theme';

import { IntlProvider } from 'react-intl';
import { localeDictionaries } from '@languages/dictionaries/root.dictionary';
import { getActiveLanguageState } from '@languages/lang.selector';

import { FooterComponent } from '@layout/footer/footer.component';

import { flattenMessages } from '@utils/lang-flattening';

export interface IAppContainerProps {
  activeLanguage: string;
  theme: string;
}

const App = ({ activeLanguage, theme }: IAppContainerProps) => {
  const activeTheme = configRootTheme(theme);

  return (
    <Router history={routerHistory}>
      <ThemeProvider theme={activeTheme}>
        <IntlProvider
          locale={activeLanguage}
          messages={flattenMessages(localeDictionaries[activeLanguage])}
        >
          <Fragment>
            <AppRoutes />
            <FooterComponent />
          </Fragment>
        </IntlProvider>
      </ThemeProvider>
    </Router>
  );
};

const mapStateToProps = (state: IAppState) => ({
  theme: getActiveThemeState(state),
  activeLanguage: getActiveLanguageState(state),
});

export const AppContainer = connect(mapStateToProps)(App);
