import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

function AppBarComponent() {
  return (
    <BrowserRouter>
      <Container>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Material UI
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default AppBarComponent;
