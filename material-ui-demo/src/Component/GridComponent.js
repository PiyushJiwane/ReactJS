import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

function GridComponent() {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item lg={3} md={6} sm={12}>
                    <Paper component={Box} p={3}>
                    <Typography variant="h4">Article - 13</Typography>
                    <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography> 
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Paper component={Box} p={3}>
                    <Typography variant="h4">Article - 14</Typography>
                    <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography> 
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Paper component={Box} p={3}>
                    <Typography variant="h4">Article - 15</Typography>
                    <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography> 
                    </Paper>
                </Grid>
                <Grid item lg={3} md={6} sm={12}>
                    <Paper component={Box} p={3}>
                    <Typography variant="h4">Article - 16</Typography>
                    <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography> 
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default GridComponent
