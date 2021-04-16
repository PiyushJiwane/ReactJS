import { AppBar, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, SwipeableDrawer, Toolbar, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const myStyle=makeStyles((theme)=>({
    appBar:{
        zIndex:theme.zIndex.drawer+1
    },
    root:{
        paddingLeft:225
    },
    drawer:{
        width:250
    }
}))

function ClippedDrawer() {
    const classes=myStyle();
    const [menu, setMenu] = useState(false)
    return (
        <Container className={classes.root}>
            <Drawer open={menu} onClose={()=>setMenu(false)} variant="permanent">
                <Toolbar/>
                <List className={classes.drawer} disablePadding>
                    <ListItem button>
                        <ListItemText primary="Getting Started"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Components"/>
                    </ListItem>
                </List>
            </Drawer>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    {/* <IconButton color="inherit" onClick={()=>setMenu(true)}>
                        <MenuRoundedIcon/>
                    </IconButton> */}
                    <Typography variant="h4" style={{flexGrow:1}}>Material UI</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main className={classes.content}>
                <Toolbar/>
                <Typography variant="h2">New ReactJS Features</Typography>
                <Typography>This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install react-router-dom. Similarly, if you are writing a React Native application, you should instead install react-router-native. Both of those will install react-router as a dependency.This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install react-router-dom. Similarly, if you are writing a React Native application, you should instead install react-router-native. Both of those will install react-router as a dependency.</Typography>
            </main>
        </Container>
    )
}

export default ClippedDrawer
