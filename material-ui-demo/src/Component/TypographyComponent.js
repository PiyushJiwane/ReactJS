import { Typography } from '@material-ui/core'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles({
    blue:{
        color:"black"
    }
})

function TypographyComponent() {
    const classes=useStyles();
    return (
        <div>
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>

            <Typography variant="body1" gutterBottom>A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>

            <Typography variant="body2" gutterBottom>A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>

            <Typography variant="subtitle1" gutterBottom>A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>

            <Typography variant="subtitle2" gutterBottom>A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>

            <Typography variant="h3" align="right" paragraph display="inline">Hello Piyush</Typography>

            <Typography variant="subtitle1" align="justify" color="secondary" className={classes.blue}>A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.A simple paragraph is the first element taught in writing. It is an independent entity, without any connection to any other topic, thought or idea. It exists on its own.</Typography>
        </div>
    )
}

export default TypographyComponent
