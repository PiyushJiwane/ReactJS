import { Box, Button, Container, Paper, Typography } from '@material-ui/core'
import React from 'react'
import AccountCircle from "@material-ui/icons/AccountCircle"

function ButtonComponent() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper component={Box} mt={3} p={4}>
                    <Typography variant="h4">Read Docs</Typography>
                    <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
                    <Box mt={3}/>
                    <Button color="primary">Read More</Button>
                    <Button color="secondary">Read More</Button>
                    <Button color="secondary" variant="contained">Read More</Button>
                    <Button color="primary" variant="contained">Read More</Button>
                    <Button color="primary" variant="outlined">Read More</Button>
                    <Button color="secondary" variant="outlined">Read More</Button>
                    <Button color="secondary" variant="outlined" fullWidth>Read More</Button>
                    <Button color="secondary" variant="outlined" fullWidth size="small">Read More</Button>
                    <Button color="secondary" variant="outlined" fullWidth size="medium">Read More</Button>
                    <Button color="secondary" variant="outlined" fullWidth size="large">Read More</Button>
                    <Button color="primary" startIcon={<AccountCircle/>}>Read More</Button>
                    <Button color="primary" endIcon={<AccountCircle/>}>Read More</Button>
                </Paper>
            </Container>
        </div>
    )
}

export default ButtonComponent
