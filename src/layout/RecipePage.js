import React from 'react';
import Step from './Step';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { useStyles } from '../Css/css';
import images from '../images/Butter-Chicken.jpg';

function RecipePage({ item }) {
  const classes = useStyles();
  return (
    <Container maxWidth='md'>
      <Card className={classes.card}>
        <h1 className={classes.center}>{item.name}</h1>
        <ol>
          {item.steps.map((step, index) => (
            <li className={classes.listItem} key={`steplink${index}`}>
              <a className={classes.listItem} href={`#step${index + 1}`}>
                {step.name}
              </a>
            </li>
          ))}
        </ol>
      </Card>
      <Card style={{ marginBottom: 100 }}>
        {item.steps.map((step, index) => (
          <Step key={`${step.name}-${index}`} step={step} index={index} />
        ))}
      </Card>
      <Link to='/'>
        <Button color='primary' variant='contained'>
          Go Home
        </Button>
      </Link>
    </Container>
  );
}

export default RecipePage;
