import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



export default function Buttons() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Fab color="primary" aria-label="add" to='/Stock' component={Link} >
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit" to='/Crypto' component={Link}>
        <EditIcon />
      </Fab>
    </div>
  );
}