import { Container, Fab, makeStyles } from "@material-ui/core";
import React from "react";
import Favorite from "@material-ui/icons/PersonAdd";

const myStyle=makeStyles({
    add:{
        position:"fixed",
        bottom:"5%",
        right:"5%"
    }
})

function FABComponent() {
    const classes=myStyle();
  return (
    <Container>
      <Fab color="primary" className={classes.add} variant="extended"><Favorite/> Add User </Fab>
    </Container>
  );
}

export default FABComponent;
