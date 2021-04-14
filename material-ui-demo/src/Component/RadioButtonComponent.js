import { Box, Container, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'

function RadioButtonComponent() {
    return (
        <Container>
            <Paper component={Box}>
                <Box component="form">
                    <FormControl>
                        <FormLabel>Choose Your Gender :</FormLabel>
                        <RadioGroup>
                            <FormControlLabel label="Male" control={<Radio color="primary"/>} value="male"/>
                            <FormControlLabel label="Male" control={<Radio color="primary"/>} value="female"/>
                            <FormControlLabel label="Male" control={<Radio color="primary"/>} value="other"/>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
        </Container>
    )
}

export default RadioButtonComponent
