import React from 'react';

import { IMatch } from '@interfaces/match.interface';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AvatarMenuComponent } from './avatar.component';

import injectSheet from 'react-jss';

import { FormattedMessage } from 'react-intl';

import classNames from 'classnames';
import { CLIENT_MENU_PATH } from '../../constants/paths';

interface INavigationMenuComponentProps {
  classes: any;
  match?: IMatch;
}

const navigationMenuStyles = (theme: any) => ({
  listStyles: {
    width: 300,
  },
  listSectionStyles: {
    paddingLeft: '33px !important',
  },
  listItemStyles: {
    paddingTop: '5px !important',
    paddingBottom: '5px !important',
  },
  listIconStyles: {
    minWidth: '40px !important',
  },
  menuPaperStyles: {
    overflow: 'hidden',
    borderRight: 'none !important',
    backgroundColor: `${theme.menuBackground} !important`,
  },
  menuSectionTitleStyles: {
    fontWeight: 'bold !important',
  },
  menuItemTitleStyles: {
    color: theme.black.main,
  },
});

const NavigationMenu = ({ classes, match }: INavigationMenuComponentProps) => {
  const {
    listStyles,
    listSectionStyles,
    listItemStyles,
    listIconStyles,
    menuPaperStyles,
    menuSectionTitleStyles,
    menuItemTitleStyles,
  } = classes;

  const renderSideList = () => (
    <div className={listStyles} role="presentation">
      {CLIENT_MENU_PATH.map((menuItem: any, index: number) => {
        return (
          <List key={index}>
            <ListItem
              button
              key={menuItem.title}
              classes={{ root: classNames(listSectionStyles, listItemStyles) }}
            >
              {menuItem.icon && (
                <ListItemIcon classes={{ root: listIconStyles }}>{menuItem.icon}</ListItemIcon>
              )}
              <ListItemText
                classes={{ primary: classNames(menuSectionTitleStyles, menuItemTitleStyles) }}
                children={<FormattedMessage id={menuItem.localeID} />}
              />
            </ListItem>
            {menuItem.children && (
              <List>
                {menuItem.children.map((item: any, index: number) => {
                  return (
                    <ListItem button key={index} classes={{ root: listItemStyles }}>
                      <ListItemIcon>{item.icon || <div />}</ListItemIcon>
                      <ListItemText
                        classes={{ primary: menuItemTitleStyles }}
                        children={<FormattedMessage id={item.localeID} />}
                      />
                    </ListItem>
                  );
                })}
              </List>
            )}
          </List>
        );
      })}
    </div>
  );

  return (
    <div>
      <Drawer classes={{ paper: menuPaperStyles }} variant="permanent" anchor="left">
        <AvatarMenuComponent />
        {renderSideList()}
      </Drawer>
    </div>
  );
};

export const NavigationMenuComponent = injectSheet(navigationMenuStyles)(NavigationMenu);
