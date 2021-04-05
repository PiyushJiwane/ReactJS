import React from 'react'
import {Box,Typography,Container} from '@material-ui/core'

function ContainerComponent() {
    return (
        <div>
            <Container maxWidth="xs" disableGutters>
            <Box textAlign="center" pt={10}>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
            </Box>
            </Container>
            <Box textAlign="center" pt={10}>
                <Typography variant="h3">About Us</Typography>
                <Typography variant="subtitle1">A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
            </Box>
        </div>
    )
}

export default ContainerComponent
