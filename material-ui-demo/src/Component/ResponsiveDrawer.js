import {
  AppBar,
  Button,
  Container,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const drawerWidth = 250;
const myStyle = makeStyles((theme) => ({
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  root: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 200,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: 250,
  },
}));

function ResponsiveDrawer() {
  const classes = myStyle();
  const [menu, setMenu] = useState(false);
  const drawerItems = (
    <List className={classes.drawer} disablePadding>
      <ListItem button>
        <ListItemText primary="Getting Started" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Components" />
      </ListItem>
    </List>
  );
  return (
    <Container>
        <Hidden smUp implementation="css">
        <Drawer open={menu} onClose={() => setMenu(false)}>
          <Toolbar />
          <Divider />
          {drawerItems}
        </Drawer>
        </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer open={menu} onClose={() => setMenu(false)} variant="permanent">
          <Toolbar />
          <Divider />
          {drawerItems}
        </Drawer>
      </Hidden>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setMenu(true)}
            className={classes.menuButton}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h4" style={{ flexGrow: 1 }}>
            Material UI
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <main className={classes.root}>
        <Toolbar />
        <Typography variant="h2">New ReactJS Features</Typography>
        <Typography>
          This package provides the core routing functionality for React Router,
          but you might not want to install it directly. If you are writing an
          application that will run in the browser, you should instead install
          react-router-dom. Similarly, if you are writing a React Native
          application, you should instead install react-router-native. Both of
          those will install react-router as a dependency.This package provides
          the core routing functionality for React Router, but you might not
          want to install it directly. If you are writing an application that
          will run in the browser, you should instead install react-router-dom.
          Similarly, if you are writing a React Native application, you should
          instead install react-router-native. Both of those will install
          react-router as a dependency.
        </Typography>
      </main>
    </Container>
  );
}

export default ResponsiveDrawer;
