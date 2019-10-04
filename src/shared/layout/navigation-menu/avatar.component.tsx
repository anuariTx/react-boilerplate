import React from 'react';

import { Avatar, Grid } from '@material-ui/core';

import injectSheet from 'react-jss';

interface INavigationMenuComponentProps {
  classes: any;
}

const avatarMenuStyles = (theme: any) => ({
  avatarContainerStyles: {
    padding: '50px 0px 30px 30px !important',
  },
  avatarImageStyles: {
    width: '50px !important',
    height: '50px !important',
  },
});

const AvatarMenu = ({ classes }: INavigationMenuComponentProps) => {
  const { avatarContainerStyles, avatarImageStyles } = classes;

  return (
    <Grid
      container
      justify="flex-start"
      alignItems="center"
      classes={{ root: avatarContainerStyles }}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
        className={avatarImageStyles}
      />
    </Grid>
  );
};

export const AvatarMenuComponent = injectSheet(avatarMenuStyles)(AvatarMenu);
