import React from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import theme from "./Theme";

const myStyle = makeStyles({
  mr: {
    marginRight: 20,
  },
});

function Customization() {
  const classes = myStyle();
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Paper component={Box} mt={3} p={4}>
          <Typography variant="h4" color="primary">
            Read Docs
          </Typography>
          <Typography variant="subtitle1">
            A simple paragraph is the first element taught in writing. It is an
            independent entity, without any connection to any other topic,
            thought or idea. It exists on its own.A simple paragraph is the
            first element taught in writing. It is an independent entity,
            without any connection to any other topic, thought or idea. It
            exists on its own.
          </Typography>
          <Box mt={2} />
          <Button color="primary" variant="contained" className={classes.mr}>
            Read More
          </Button>
          <Button color="secondary" variant="contained">
            Share Post
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Customization;
