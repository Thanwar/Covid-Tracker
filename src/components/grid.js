import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



import Globaldata from './globaldata';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Maingrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        
        <Grid item xs>
          <Paper className={classes.paper}>
              <Globaldata />
          </Paper>
        </Grid>


        {/* <Grid item xs={8}>
          <Paper className={classes.paper}>Country data</Paper>
        </Grid> */}


      </Grid>
    </div>
  );
}