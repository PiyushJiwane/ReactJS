import { Box, Container, Paper, Typography } from "@material-ui/core";
import React from "react";

function PaperComponent() {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper square elevation={2} component={Box} p={2}>
            <Typography variant="h3">Hello, Piyush Jiwane !!!</Typography>
            <Typography variant="subtitle1">
              A simple paragraph is the first element taught in writing. It is
              an independent entity, without any connection to any other topic,
              thought or idea. It exists on its own. A simple paragraph is the
              first element taught in writing. It is an independent entity,
              without any connection to any other topic, thought or idea. It
              exists on its own.
            </Typography>
            <Paper variant="outlined">
              <Box p={2}>
                <Typography variant="h3">Hello, Piyush Jiwane !!!</Typography>
                <Typography variant="subtitle1">
                  A simple paragraph is the first element taught in writing. It
                  is an independent entity, without any connection to any other
                  topic, thought or idea. It exists on its own. A simple
                  paragraph is the first element taught in writing. It is an
                  independent entity, without any connection to any other topic,
                  thought or idea. It exists on its own.
                </Typography>
              </Box>
            </Paper>
        </Paper>
      </Container>
    </div>
  );
}

export default PaperComponent;
