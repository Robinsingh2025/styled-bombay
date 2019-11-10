import React from 'react';
import Instructions from '../Components/Instructions';
import '../Components/step.css';
import { Grid, Paper, Typography, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import InstructionSlides from "./InstructionSlides";
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  paper: {
    textAlign: 'center'
  },
  paper2: {
    textAlign: 'start'
  },
  margin: {
    marginTop: 50
  }
});

function Step({ step, index }) {
  const classes = useStyles();
  return (
    <div id={`step${index + 1}`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h5' className={classes.paper}>
            {step.name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Ingredients</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.paper}>
            <ol>
              {step.ingredients.map(ingredient => (
                <li
                  key={`${ingredient.measurement}-${ingredient.name}-${ingredient.id}`}
                >
                  {ingredient.measurement} of{' '}
                  {ingredient.id ? (
                    <a href={ingredient.id}>{ingredient.name}</a>
                  ) : (
                    ingredient.name
                  )}
                </li>
              ))}
            </ol>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.paper}>Instructions</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Instructions instructions={step.instructions} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Step;
