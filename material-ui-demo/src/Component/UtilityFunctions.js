import { Box, Button, Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const myStyle=makeStyles(theme=>({
    root:{
        width:"100vw",
        height:"100vh",
        backgroundColor:theme.palette.grey[200]
    }
}))
function UtilityFunctions() {
    const classes=myStyle();
    return (
        <Container className={classes.root}>
            <Paper width="50%" height={200} component={Box} p={2} mt={2} bgcolor="primary.main" color="white" borderLeft={10} borderColor="secondary.main" boxShadow={10}>
                <Typography variant="h4">Get Started</Typography>
                <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
            </Paper>
            <Paper width="50%" height={200} component={Box} p={2} mt={2} borderLeft={5} borderColor="secondary.main" boxShadow={10} textAlign="center">
                <Typography variant="h4">Get Started</Typography>
                <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
                <Button variant="outlined" color="secondary">Read More</Button>
            </Paper>
        </Container>
    )
}

export default UtilityFunctions
