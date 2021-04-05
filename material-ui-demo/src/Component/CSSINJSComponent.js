import React from "react";
import { Box,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  myBox: {
    width: 300,
    backgroundColor: theme.palette.warning.dark,
    padding: 20,
    color: "white",
    borderRadius:theme.shape.borderRadius,
    margin: "10px",
  },
  myContainer: {
    display: "flex",
  },
}));

function CSSINJSComponent() {
  const classes = useStyles();
  return (
    <Box className={classes.myContainer}>
      <Box className={classes.myBox}>
        <Typography variant="h3">Heading 1</Typography>
        <Typography variant="subtitle1">
          A simple paragraph is the first element taught in writing. It is an
          independent entity, without any connection to any other topic, thought
          or idea. It exists on its own.
        </Typography>
      </Box>
      <Box className={classes.myBox}>
        <Typography variant="h3">Heading 2</Typography>
        <Typography variant="subtitle1">
          A simple paragraph is the first element taught in writing. It is an
          independent entity, without any connection to any other topic, thought
          or idea. It exists on its own.
        </Typography>
      </Box>
      <Box className={classes.myBox}>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="subtitle1">
          A simple paragraph is the first element taught in writing. It is an
          independent entity, without any connection to any other topic, thought
          or idea. It exists on its own.
        </Typography>
      </Box>
    </Box>
  );
}

export default CSSINJSComponent;
