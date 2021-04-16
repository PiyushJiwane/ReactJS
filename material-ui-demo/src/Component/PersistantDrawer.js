import { AppBar, Button, Container, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React,{useState} from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import classNames from 'classnames'

const drawerWidth=250;
const myStyle=makeStyles((theme)=>({
    content:{
        paddingTop:theme.spacing(8)
    },
    drawer:{
        width:drawerWidth
    },
    appBarShift:{
        width:`calc(100% - ${drawerWidth}px)`,
        transition:theme.transitions.create(["margin","width"],{
            easing:theme.transitions.easing.easeOut,
            duration:300
        })
    },
    contentShift:{
        marginLeft:drawerWidth,
        transition:theme.transitions.create(["margin","width"],{
            easing:theme.transitions.easing.easeOut,
            duration:300
        })
    }
}))

function PersistantDrawer() {
    const classes=myStyle();
    const [menu, setMenu] = useState(false)
    return (
        <Container>
            <Drawer open={menu} onClose={()=>setMenu(false)} variant="persistent">
                <List className={classes.drawer} disablePadding>
                    <ListItem button>
                        <ListItemText primary="Getting Started"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Components"/>
                    </ListItem>
                </List>
            </Drawer>
            <AppBar className={classNames({[classes.appBarShift]:menu})}>
                <Toolbar>
                    <IconButton color="inherit" onClick={()=>setMenu(!menu)}>
                        <MenuRoundedIcon/>
                    </IconButton>
                    <Typography variant="h4" style={{flexGrow:1}}>Material UI</Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <main className={classNames(classes.content,{
                [classes.contentShift]:menu
            })} >
                <Typography variant="h2">New ReactJS Features</Typography>
                <Typography>This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install react-router-dom. Similarly, if you are writing a React Native application, you should instead install react-router-native. Both of those will install react-router as a dependency.This package provides the core routing functionality for React Router, but you might not want to install it directly. If you are writing an application that will run in the browser, you should instead install react-router-dom. Similarly, if you are writing a React Native application, you should instead install react-router-native. Both of those will install react-router as a dependency.</Typography>
            </main>
        </Container>
    )
}

export default PersistantDrawer
