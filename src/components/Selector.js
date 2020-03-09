import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;


  // root: {
  //   display: 'flex',
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  // },
  const drawer = {
    width: drawerWidth,
    flexShrink: 0,
  },

  const drawerPaper = {
    width: drawerWidth,
  }

  const content = {
    flexGrow: 1,
  }

//   toolbar: theme.mixins.toolbar,
// }));

export default function ClippedDrawer() {
  // const classes = useStyles();

  return (
    <div >
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      style={drawerPaper}
        variant="permanent"
      >
        <div/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main >
        <div />
      </main>
    </div>
  );
}