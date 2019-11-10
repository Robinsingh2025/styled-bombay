import React from 'react';
import {
  Button,
  Container,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  btn: {
    margin: 0
  }
}));
export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      style={{ marginTop: '40vh', marginLeft: '50vh' }}
      container
      direction='row'
      justify='center'
      alignItems='center'
      item
      spacing={3}
    >
      <Grid item xs={12}>
        <Typography variant='h2'>Bombay grill</Typography>
      </Grid>

      <Grid container direction='row'>
        <Grid>
          <Link to='/app'>
            <Button
              style={{ marginLeft: 30 }}
              className={classes.btn}
              variant='contained'
              color='primary'
            >
              View Recipe
            </Button>
          </Link>
        </Grid>
        <Grid>
          <Link to='/form'>
            <Button
              style={{ marginLeft: 20 }}
              variant='contained'
              color='secondary'
              className
            >
              Create Recipe
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
