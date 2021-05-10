import {
  AppBar,
  Avatar,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

const Navbar = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="absolute"
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          Expense Tracker App
        </Typography>
        <IconButton color="inherit">
          {/* <Typography className={classes.username} variant="h6">
            faber
          </Typography>
          <Avatar className={classes.purple}>F</Avatar> */}
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
