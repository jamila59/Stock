// import React from 'react';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

// const drawerWidth = 240;

//  const root = {
//    display: 'flex'
//  }
//  const drawer= {
//    width: drawerWidth,
//    flexShrink: 0
//  }
// const toolbar = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding:  '8px',
//   minHeight: '64px'
// }
// const appBar = {
//   zIndex: '+1',
//   flex: 1
// }

// export default function ClippedDrawer() {


//   return (
//     <div style={root}>
//       <CssBaseline />
//       <AppBar position="fixed" style={appBar}>
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Welcome
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         style={drawer}
//         variant="permanent"
//       >
//         <div style={toolbar} />
//         <List>
//           {[ 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//       </Drawer>
//       <main>
//         <div style={toolbar} />
//           <h1>You Are Logged In</h1>
//           {/* <button onClick = {this.logout}>Logout</button> */}
//       </main>
//     </div>
//   );
// }