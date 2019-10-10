import React from 'react';

import {
  OpenInNew,
  Assignment,
  PhoneAndroid,
  WifiTethering,
  ViewQuilt,
  AccountTree,
  Person,
  Keyboard,
  PeopleOutline,
  Group,
  Help,
  Equalizer,
} from '@material-ui/icons';

export const SA_MENU_PATH = [
  {
    localeID: 'sidemenu.dashboard.sectionTitle',
    title: 'Dashboard',
    path: '/dashboard',
    children: [
      {
        localeID: 'sidemenu.dashboard.customization',
        title: 'Dashboard Customization',
        path: '/customization',
        icon: <OpenInNew />,
      },
      {
        localeID: 'sidemenu.dashboard.reports',
        title: 'Reports',
        path: '/reports',
        icon: <Assignment />,
      },
    ],
  },
  {
    localeID: 'sidemenu.program.sectionTitle',
    title: 'Program',
    path: '/program',
    children: [
      {
        localeID: 'sidemenu.program.appBuilder',
        title: 'App Builder',
        path: '/app-builder',
        icon: <PhoneAndroid />,
      },
      {
        localeID: 'sidemenu.program.broadcast',
        title: 'Broadcast',
        path: '/broadcast',
        icon: <WifiTethering />,
      },
      {
        localeID: 'sidemenu.program.templates',
        title: 'Templates',
        path: '/templates',
        icon: <ViewQuilt />,
      },
      {
        localeID: 'sidemenu.program.workflow',
        title: 'Workflow',
        path: '/workflow',
        icon: <AccountTree />,
      },
    ],
  },
  {
    localeID: 'sidemenu.teamManagement.sectionTitle',
    title: 'Team Management',
    path: '/team-management',
    children: [
      {
        localeID: 'sidemenu.teamManagement.users',
        title: 'Users',
        path: '/users',
        icon: <Person />,
      },
      {
        localeID: 'sidemenu.teamManagement.groups',
        title: 'Groups',
        path: '/groups',
        icon: <Group />,
      },
    ],
  },
  {
    localeID: 'sidemenu.more.sectionTitle',
    title: 'More',
    path: '/more',
    children: [{ title: 'Help', path: '/help', icon: <Help /> }],
  },
];

export const CLIENT_MENU_PATH = [
  {
    localeID: 'sidemenu.dashboard.sectionTitle',
    title: 'Dashboard',
    path: '/dashboard',
    icon: <Keyboard />,
    children: [
      {
        localeID: 'sidemenu.dashboard.customization',
        title: 'Dashboard Customization',
        path: '/customization',
      },
      { localeID: 'sidemenu.dashboard.reports', title: 'Reports', path: '/reports' },
    ],
  },
  {
    localeID: 'sidemenu.program.sectionTitle',
    title: 'Program',
    path: '/program',
    icon: <Equalizer />,
    children: [
      { localeID: 'sidemenu.program.appBuilder', title: 'App Builder', path: '/app-builder' },
      { localeID: 'sidemenu.program.broadcast', title: 'Broadcast', path: '/broadcast' },
      { localeID: 'sidemenu.program.templates', title: 'Templates', path: '/templates' },
      { localeID: 'sidemenu.program.workflow', title: 'Workflow', path: '/workflow' },
    ],
  },
  {
    localeID: 'sidemenu.teamManagement.sectionTitle',
    title: 'Team Management',
    path: '/team-management',
    icon: <PeopleOutline />,
    children: [
      { localeID: 'sidemenu.teamManagement.users', title: 'Users', path: '/users' },
      { localeID: 'sidemenu.teamManagement.groups', title: 'Groups', path: '/groups' },
    ],
  },
  { localeID: 'sidemenu.more.sectionTitle', title: 'More', path: '/more', icon: <Help /> },
];
