import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem } from '@material-ui/core';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import TranslateRoundedIcon from '@material-ui/icons/TranslateRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuComponent() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  const languages=["English","Hindi","Marathi"];
  const [selectedIndex, setSelectedIndex] = useState(0)
  const handleSelected=(index)=>{
    setSelectedIndex(index);
      setOpen(false);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button startIcon={<TranslateRoundedIcon/>} endIcon={<ExpandMoreRoundedIcon/>} color="inherit" onClick={(e)=>setOpen(e.currentTarget)}>{languages[selectedIndex] || "Languages"}</Button>
          <Menu open={Boolean(open)} anchorEl={open} onClose={()=>setOpen(false)}>
              {/* <MenuItem onClick={()=>setOpen(false)}>English</MenuItem>
              <MenuItem onClick={()=>setOpen(false)}>Hindi</MenuItem>
              <MenuItem onClick={()=>setOpen(false)}>Marathi</MenuItem> */}
              {
                  languages.map((item,index)=>(
                      <MenuItem onClick={()=>handleSelected(index)}>{item}</MenuItem>
                  ))
              }
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
