import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import orange  from "@material-ui/core/colors/orange";
import green  from "@material-ui/core/colors/green";
import deepPurple  from "@material-ui/core/colors/deepPurple";

const userStyle=makeStyles({
    myheading:{
        color:deepPurple[900],
        backgroundColor:orange[900]
    }
})

function ColorComponent() {
    const classes=userStyle();
    return (
        <div>
            <Container style={{backgroundColor:deepPurple[100]}}>
            <Typography variant="h2" color="primary">Hello, Piyush Jiwane</Typography>
            <Typography variant="h2" color="secondary">Hello, Piyush Jiwane</Typography>
            <Typography variant="h2" style={{color:orange[500]}}>Hello, Piyush Jiwane</Typography>
            <Typography variant="h2" style={{color:orange.A700}}>Hello, Piyush Jiwane</Typography>
            <Typography variant="h2" style={{color:green[900]}}>Hello, Piyush Jiwane</Typography>
            <Typography variant="h2" className={classes.myheading}>Hello, Piyush Jiwane</Typography>
            </Container>
        </div>
    )
}

export default ColorComponent
