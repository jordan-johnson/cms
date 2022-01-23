import { useState } from 'react';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles({
  paper: {
    width: 250
  }
});

const Navigation = () => {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  return (
    <>
      <AppBar >
        <Toolbar>
          <IconButton onClick={() => setDisplay(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={display} onClose={() => setDisplay(false)} classes={{ paper: classes.paper }}>
        <List>
          <ListItem button>
            <HomeIcon />
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
