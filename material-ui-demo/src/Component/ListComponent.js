import {
  Box,
    Collapse,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React,{useState} from "react";
import DirectionsBusRoundedIcon from "@material-ui/icons/DirectionsBusRounded";
import DirectionsCarRoundedIcon from "@material-ui/icons/DirectionsCarRounded";
import DirectionsRailwayRoundedIcon from "@material-ui/icons/DirectionsRailwayRounded";
import DirectionsBoatRoundedIcon from "@material-ui/icons/DirectionsBoatRounded";

const myStyle = makeStyles(theme=>({
    sidebar: {
      position: "fixed",
      left: 0,
      top: 0,
      width: "18%",
      height: "100%",
      borderRadius: 0,
    },
    nestedPadding:{
        paddingLeft:theme.spacing(10)
    }
  }));

function ListComponent() {
  const classes = myStyle();
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <Paper component={Box} boxShadow={4} className={classes.sidebar}>
        <List disablePadding>
          <ListItem button>
            <ListItemIcon>
              <DirectionsBusRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Getting Started" />
          </ListItem>
          <ListItem button onClick={()=>setOpen(!open)}>
            <ListItemIcon>
              <DirectionsRailwayRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="Components" />
          </ListItem>
          <Collapse in={open}>
          <List disablePadding>
              <ListItem className={classes.nestedPadding} button>
                  <ListItemText primary="Button"/>
              </ListItem>
              <ListItem className={classes.nestedPadding} button>
                  <ListItemText primary="Card"/>
              </ListItem>
              <ListItem className={classes.nestedPadding} button>
                  <ListItemText primary="Color"/>
              </ListItem>
          </List>
          </Collapse>
          <ListItem button>
            <ListItemIcon>
              <DirectionsCarRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant="h6" color="primary">
                  Version
                </Typography>
              }
              secondary="V 3.71.0025"
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default ListComponent;
