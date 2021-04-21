import React,{useState} from "react";
import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
  Box,
} from "@material-ui/core";
import HttpsRoundedIcon from "@material-ui/icons/HttpsRounded";
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "30%",
    margin: "auto",
    marginTop: 30,
},
paper: {
    padding: theme.spacing(3),
    minHeight: 150,
    minWidth: 200,
  },
  textFontSize:{
      fontSize:13
  },
  orange: {
    backgroundColor: deepOrange[500],
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [signIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false)
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} style={{position:"relative"}}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Avatar className={classes.orange}>
                <HttpsRoundedIcon />
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Link href="#" className={classes.textFontSize}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs={8}>
            <Box style={{position:"absolute",right:0}}>
            <Link href="#" className={classes.textFontSize}>
              Don't have an account? Sign Up
            </Link>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default LoginPage;
