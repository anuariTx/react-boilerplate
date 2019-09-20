import React from 'react';

import { IAppState } from '@rdx/root.reducer';

import { connect } from 'react-redux';

import { HeaderComponent } from './header.component';

interface IHeaderContainerProps {
  
};

const Header = (props: IHeaderContainerProps) => {
  return <HeaderComponent />;
};

const mapStateToProps = (state: IAppState) => ({});

const mapDispatchToProps = {};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
